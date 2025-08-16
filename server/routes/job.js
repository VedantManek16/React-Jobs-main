import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const jobsFile = path.join(__dirname, "../jobs.json");

// Utility: read and write jobs
const readJobs = () => JSON.parse(fs.readFileSync(jobsFile, "utf-8"));
const writeJobs = (jobs) =>
  fs.writeFileSync(jobsFile, JSON.stringify(jobs, null, 2));

// @route   GET /api/jobs
router.get("/", (req, res) => {
  const jobs = readJobs();
  
  // Handle limit query parameter
  if (req.query._limit) {
    const limit = parseInt(req.query._limit);
    const limitedJobs = jobs.slice(0, limit);
    return res.json(limitedJobs);
  }
  
  res.json(jobs);
});

// @route   GET /api/jobs/:id
router.get("/:id", (req, res) => {
  const jobs = readJobs();
  const job = jobs.find((j) => j.id == req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json(job);
});

// @route   POST /api/jobs
router.post("/", (req, res) => {
  const jobs = readJobs();
  const newJob = { id: jobs.length + 1, ...req.body };
  jobs.push(newJob);
  writeJobs(jobs);
  res.status(201).json(newJob);
});

// @route   PUT /api/jobs/:id
router.put("/:id", (req, res) => {
  let jobs = readJobs();
  const idx = jobs.findIndex((j) => j.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Job not found" });

  jobs[idx] = { ...jobs[idx], ...req.body };
  writeJobs(jobs);
  res.json(jobs[idx]);
});

// @route   DELETE /api/jobs/:id
router.delete("/:id", (req, res) => {
  let jobs = readJobs();
  jobs = jobs.filter((j) => j.id != req.params.id);
  writeJobs(jobs);
  res.json({ success: true });
});

export default router;

import fs from "fs";
import path from "path";
import type { Workshop, WorkshopIndex, WorkshopIndexEntry } from "./types";

const PROJECTS_DIR = path.join(process.cwd(), "..", "projects");

export function getWorkshopIndex(): WorkshopIndexEntry[] {
  const indexPath = path.join(PROJECTS_DIR, "index.json");
  if (!fs.existsSync(indexPath)) return [];
  const raw = fs.readFileSync(indexPath, "utf-8");
  const index: WorkshopIndex = JSON.parse(raw);
  return index.workshops ?? [];
}

export function getWorkshop(slug: string): Workshop | null {
  const jsonPath = path.join(PROJECTS_DIR, slug, "workshop.json");
  if (!fs.existsSync(jsonPath)) return null;
  const raw = fs.readFileSync(jsonPath, "utf-8");
  return JSON.parse(raw) as Workshop;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) =>
      fs.existsSync(path.join(PROJECTS_DIR, name, "workshop.json"))
    );
}

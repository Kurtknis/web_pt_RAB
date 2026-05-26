import { contentRepository } from "@/repositories/contentRepository";

export function getContentProvider() {
  return contentRepository;
}

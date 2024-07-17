/**
 *  @project - web-scraping
 *  @module - web-scraping-service
 *  @Engineer - Yashi <yashisrivastava030@gmail.com>
 */

import { Router } from "express";
import { handlePagination } from "../middleware/pagination.js";
import {
  getScrapeData,
  getScrapeList,
  getScrapeDataById,
} from "../controllers/scrape.js";

const router = Router();

router.route("/scrape").post(getScrapeData);

router.route("/scrape").get(handlePagination, getScrapeList);

router.route("/scrape/:scrapeId").get(getScrapeDataById);

export default router;

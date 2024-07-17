/**
 *  @project - web-scraping
 *  @module - web-scraping-service
 *  @Engineer - Yashi <yashisrivastava030@gmail.com>
 */

// import required libraries
import puppeteer from "puppeteer";

// import models
import ScrapedDataModel from "../models/scrapedData.js";

// import utils
import {
  SUCCESS,
  UNDEFINED,
  ERROR,
  ALREADY_EXISTS,
} from "../utils/constants.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";

/**
 @desc - read scrape data from given url
 @body {string}- url
 @return {object}- res, data, message, code, success, error
*/
export const getScrapeData = asyncHandler(async (req, res) => {
  let { url } = req.body;

  const existData = await ScrapedDataModel.findOne({ webUrl: url });
  if (existData) {
    return ApiResponse(res, existData, ALREADY_EXISTS, 409, true, UNDEFINED);
  }

  try {
    // Ensure the screenshots directory exists
    // const screenshotDir = path.join(__dirname, "screenshots");
    // if (!fs.existsSync(screenshotDir)) {
    //   fs.mkdirSync(screenshotDir);
    // }

    // Launch Puppeteer and navigate to the URL
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Extract data using Puppeteer
    const name = await page.title();
    const description = await page
      .$eval('meta[name="description"]', (el) => el.content)
      .catch(() => "");
    const logo = await page.$eval("img", (el) => el.src).catch(() => "");
    const facebook = await page
      .$eval('a[href*="facebook.com"]', (el) => el.href)
      .catch(() => "");
    const linkedin = await page
      .$eval('a[href*="linkedin.com"]', (el) => el.href)
      .catch(() => "");
    const twitter = await page
      .$eval('a[href*="twitter.com"]', (el) => el.href)
      .catch(() => "");
    const instagram = await page
      .$eval('a[href*="instagram.com"]', (el) => el.href)
      .catch(() => "");
    const address = await page
      .$eval("address", (el) => el.innerText)
      .catch(() => "");
    const phone = await page
      .$eval('a[href^="tel:"]', (el) => el.innerText)
      .catch(() => "");
    const email = await page
      .$eval('a[href^="mailto:"]', (el) => el.innerText)
      .catch(() => "");

    // Take a screenshot using Puppeteer
    // const screenshotPath = path.join(screenshotDir, `${Date.now()}.png`);
    // await page.screenshot({ path: screenshotPath });
    await browser.close();

    // Save the scraped data to MongoDB
    const scrapedData = await ScrapedDataModel.create({
      name,
      description,
      logoUrl: logo,
      address,
      phone,
      email,
      webUrl: url,
      socialLinks: {
        facebook,
        linkedin,
        twitter,
        instagram,
      },
    });
    return ApiResponse(res, scrapedData, SUCCESS, 201, true, UNDEFINED);
  } catch (error) {
    return ApiResponse(res, error?.message, ERROR, 500, false, UNDEFINED);
  }
});

/**
 @desc - get all list of scraped data
 @param {number}- page
 @param {number}- limit
 @return {object}- res, data, message, code, success, error
*/
export const getScrapeList = asyncHandler(async (req, res) => {
  let { page, limit } = req.query;

  const list = await ScrapedDataModel.find()
    .lean()
    .skip(page > 0 ? (page - 1) * limit : 0)
    .limit(limit)
    .sort({ createdAt: -1 })
    .select("-updatedAt -createdAt");

  return ApiResponse(res, list, SUCCESS, 200, true, UNDEFINED);
});

/**
 @desc - get scraped data by a specific id
 @param {string}- scrapeId
 @return {object}- res, data, message, code, success, error
*/
export const getScrapeDataById = asyncHandler(async (req, res) => {
  let { scrapeId } = req.params;
  console.log(scrapeId);
  const data = await ScrapedDataModel.findById(scrapeId)
    .lean()
    .select("-updatedAt -createdAt");

  return ApiResponse(res, data, SUCCESS, 200, true, UNDEFINED);
});

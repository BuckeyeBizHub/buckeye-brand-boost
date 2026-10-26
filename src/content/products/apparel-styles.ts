import type { GarmentStyle } from "../types";

// Popular blanks from the apparel distributor's catalog, re-picked 2026-10-26
// (better-known brands, no budget lines). Brand, style number, name and
// in-stock colors only. Never add a price or a cost here: this file ships to
// the browser. Photos are the distributor's stock images, which David
// confirmed we can use.

export const T_SHIRT_STYLES: GarmentStyle[] = [
  {
    brand: "BELLA + CANVAS",
    style: "3001",
    name: "Jersey Tee",
    colors: ["Black", "White", "Navy", "True Royal", "Red", "Forest"],
    image: { src: "https://www.ssactivewear.com/Images/Color/30657_f_fm.jpg", alt: "BELLA + CANVAS 3001 Jersey Tee in Black" },
  },
  {
    brand: "Next Level",
    style: "3600",
    name: "Unisex Cotton Tee",
    colors: ["Black", "White", "Royal", "Red", "Heather Grey", "Forest Green"],
    image: { src: "https://www.ssactivewear.com/Images/Color/40991_f_fm.jpg", alt: "Next Level 3600 Unisex Cotton Tee in Black" },
  },
  {
    brand: "Comfort Colors",
    style: "1717",
    name: "Unisex Garment-Dyed Heavyweight T-Shirt",
    colors: ["Black", "White", "Navy", "True Navy", "Red", "Khaki"],
    image: { src: "https://www.ssactivewear.com/Images/Color/34669_f_fm.jpg", alt: "Comfort Colors 1717 Unisex Garment-Dyed Heavyweight T-Shirt in Black" },
  },
  {
    brand: "Comfort Colors",
    style: "6030",
    name: "Unisex Garment-Dyed Heavyweight Pocket T-Shirt",
    colors: ["Black", "White", "True Navy", "Red", "Khaki", "Ivory"],
    image: { src: "https://www.ssactivewear.com/Images/Color/46776_f_fm.jpg", alt: "Comfort Colors 6030 Unisex Garment-Dyed Heavyweight Pocket T-Shirt in Black" },
  },
  {
    brand: "Dickies",
    style: "WS50-D",
    name: "Men's Traditional Heavyweight T-Shirt",
    colors: ["Black", "Heather Grey", "Charcoal", "Dark Navy", "Desert Sand"],
    image: { src: "https://www.ssactivewear.com/Images/Color/94364_f_fm.jpg", alt: "Dickies WS50-D Men's Traditional Heavyweight T-Shirt in Black" },
  },
  {
    brand: "Kishigo",
    style: "9118-9119",
    name: "Unisex Class 3 T-Shirt",
    colors: ["Lime"],
    image: { src: "https://www.ssactivewear.com/Images/Color/32400_f_fm.jpg", alt: "Kishigo 9118-9119 Unisex Class 3 T-Shirt in Lime" },
  },
  {
    brand: "Red Kap",
    style: "SVY4",
    name: "Men's High Visibility Short Sleeve T-Shirt",
    colors: ["Fluorescent Yellow"],
    image: { src: "https://www.ssactivewear.com/Images/Color/96694_f_fm.jpg", alt: "Red Kap SVY4 Men's High Visibility Short Sleeve T-Shirt in Fluorescent Yellow" },
  },
];

export const POLO_STYLES: GarmentStyle[] = [
  {
    brand: "Harriton",
    style: "M200",
    name: "Men's Pique Polo",
    colors: ["Black", "White", "Navy", "True Royal", "Red", "Grey Heather"],
    image: { src: "https://www.ssactivewear.com/Images/Color/122169_f_fm.jpg", alt: "Harriton M200 Men's Pique Polo in Black" },
  },
  {
    brand: "CORE365",
    style: "88181",
    name: "Men's Origin Performance Piqué Polo",
    colors: ["Black", "White", "True Royal", "Forest", "Safety Yellow", "Classic Navy"],
    image: { src: "https://www.ssactivewear.com/Images/Color/118808_f_fm.jpg", alt: "CORE365 88181 Men's Origin Performance Piqué Polo in Black" },
  },
  {
    brand: "Team 365",
    style: "TT51",
    name: "Men's Zone Performance Polo",
    colors: ["Black", "White", "Sport Dark Navy", "Sport Graphite", "Sport Royal", "Sport Red"],
    image: { src: "https://www.ssactivewear.com/Images/Color/122273_f_fm.jpg", alt: "Team 365 TT51 Men's Zone Performance Polo in Black" },
  },
  {
    brand: "Team 365",
    style: "TT21",
    name: "Men's Command Snag Protection Polo",
    colors: ["Black", "White", "Safety Yellow", "Sport Dark Navy", "Sport Royal", "Sport Graphite"],
    image: { src: "https://www.ssactivewear.com/Images/Color/121638_f_fm.jpg", alt: "Team 365 TT21 Men's Command Snag Protection Polo in Black" },
  },
  {
    brand: "Adidas",
    style: "A230",
    name: "Men's Performance Polo",
    colors: ["Black", "White", "Navy", "Maroon", "Orange", "Collegiate Royal"],
    image: { src: "https://www.ssactivewear.com/Images/Color/74514_f_fm.jpg", alt: "Adidas A230 Men's Performance Polo in Black" },
  },
];

export const JACKET_STYLES: GarmentStyle[] = [
  {
    brand: "Harriton",
    style: "M990",
    name: "Men's Full-Zip Fleece",
    colors: ["Black", "Navy", "True Royal", "Red", "Charcoal", "Safety Orange"],
    image: { src: "https://www.ssactivewear.com/Images/Color/121873_f_fm.jpg", alt: "Harriton M990 Men's Full-Zip Fleece in Black" },
  },
  {
    brand: "CORE365",
    style: "88190",
    name: "Men's Journey Fleece Jacket",
    colors: ["Black", "True Royal", "Heather Charcoal", "Classic Navy", "Burgundy"],
    image: { src: "https://www.ssactivewear.com/Images/Color/119225_f_fm.jpg", alt: "CORE365 88190 Men's Journey Fleece Jacket in Black" },
  },
  {
    brand: "CORE365",
    style: "88184",
    name: "Men's Cruise Two-Layer Fleece Bonded Soft Shell Jacket",
    colors: ["Black", "Carbon", "Classic Navy", "Classic Red"],
    image: { src: "https://www.ssactivewear.com/Images/Color/119274_f_fm.jpg", alt: "CORE365 88184 Men's Cruise Two-Layer Fleece Bonded Soft Shell Jacket in Black" },
  },
  {
    brand: "CORE365",
    style: "CE708",
    name: "Men's Techno Lite Three-Layer Knit Tech-Shell",
    colors: ["Black", "True Royal", "Safety Yellow", "Carbon", "Classic Navy", "Classic Red"],
    image: { src: "https://www.ssactivewear.com/Images/Color/119446_f_fm.jpg", alt: "CORE365 CE708 Men's Techno Lite Three-Layer Knit Tech-Shell in Black" },
  },
  {
    brand: "DRI DUCK",
    style: "5350",
    name: "Men's Motion Soft Shell Jacket",
    colors: ["Black", "Charcoal", "Black Heather/ Black", "Saddle", "Deep Blue/ Charcoal", "Red/ Charcoal"],
    image: { src: "https://www.ssactivewear.com/Images/Color/31282_f_fm.jpg", alt: "DRI DUCK 5350 Men's Motion Soft Shell Jacket in Black" },
  },
  {
    brand: "DRI DUCK",
    style: "5090",
    name: "Men's Laredo Boulder Cloth Canvas Jacket with Thermal Lining",
    colors: ["Black", "Tobacco"],
    image: { src: "https://www.ssactivewear.com/Images/Color/38269_f_fm.jpg", alt: "DRI DUCK 5090 Men's Laredo Boulder Cloth Canvas Jacket with Thermal Lining in Black" },
  },
];

export const HAT_STYLES: GarmentStyle[] = [
  {
    brand: "Richardson",
    style: "112",
    name: "Snapback Trucker Cap",
    colors: ["Black", "White", "Navy", "Royal", "Red", "Kelly Green"],
    image: { src: "https://www.ssactivewear.com/Images/Color/51140_f_fm.jpg", alt: "Richardson 112 Snapback Trucker Cap in Black" },
  },
  {
    brand: "YP Classics",
    style: "6006",
    name: "Classic Five-Panel Trucker Cap",
    colors: ["Black", "White", "Navy", "Red", "Charcoal", "Black/ White"],
    image: { src: "https://www.ssactivewear.com/Images/Color/35926_f_fm.jpg", alt: "YP Classics 6006 Classic Five-Panel Trucker Cap in Black" },
  },
  {
    brand: "Flexfit",
    style: "6277",
    name: "Cotton Blend Cap",
    colors: ["Black", "White", "Navy", "Red", "Maroon", "Orange"],
    image: { src: "https://www.ssactivewear.com/Images/Color/20234_f_fm.jpg", alt: "Flexfit 6277 Cotton Blend Cap in Black" },
  },
  {
    brand: "Richardson",
    style: "220",
    name: "Relaxed Performance Lite Cap",
    colors: ["Black", "Red", "Charcoal", "Maroon", "Stone", "Smoke Blue"],
    image: { src: "https://www.ssactivewear.com/Images/Color/130099_f_fm.jpg", alt: "Richardson 220 Relaxed Performance Lite Cap in Black" },
  },
  {
    brand: "YP Classics",
    style: "1501KC",
    name: "Cuffed Beanie",
    colors: ["Black", "White", "Navy", "Royal", "Red", "Maroon"],
    image: { src: "https://www.ssactivewear.com/Images/Color/51224_f_fm.jpg", alt: "YP Classics 1501KC Cuffed Beanie in Black" },
  },
  {
    brand: "Richardson",
    style: "146R",
    name: "Waffle Cuffed Beanie",
    colors: ["Black", "Navy", "Heather Grey", "Heather Charcoal", "Birch", "Rust"],
    image: { src: "https://www.ssactivewear.com/Images/Color/29482_f_fm.jpg", alt: "Richardson 146R Waffle Cuffed Beanie in Black" },
  },
  {
    brand: "Columbia",
    style: "191132",
    name: "Whirlibird Cuffed Beanie",
    colors: ["Black", "White Marled", "Dark Nocturnal", "Black/ Graphite", "City Grey", "Delta"],
    image: { src: "https://www.ssactivewear.com/Images/Color/96688_f_fm.jpg", alt: "Columbia 191132 Whirlibird Cuffed Beanie in Black" },
  },
  {
    brand: "DRI DUCK",
    style: "3562",
    name: "Basecamp Performance Cuffed Beanie",
    colors: ["Black", "Charcoal", "Deep Blue"],
    image: { src: "https://www.ssactivewear.com/Images/Color/50922_f_fm.jpg", alt: "DRI DUCK 3562 Basecamp Performance Cuffed Beanie in Black" },
  },
];

export const PULLOVER_STYLES: GarmentStyle[] = [
  {
    brand: "Independent Trading Co.",
    style: "SS4500",
    name: "Unisex 8.5 oz. Midweight Hooded Sweatshirt",
    colors: ["Black", "White", "Royal", "Red", "Grey Heather", "Charcoal"],
    image: { src: "https://www.ssactivewear.com/Images/Color/31212_f_fm.jpg", alt: "Independent Trading Co. SS4500 Unisex 8.5 oz. Midweight Hooded Sweatshirt in Black" },
  },
  {
    brand: "Champion",
    style: "S700",
    name: "Unisex Powerblend Hooded Sweatshirt",
    colors: ["Black", "White", "Navy", "Maroon", "Orange", "Light Steel"],
    image: { src: "https://www.ssactivewear.com/Images/Color/30685_f_fm.jpg", alt: "Champion S700 Unisex Powerblend Hooded Sweatshirt in Black" },
  },
  {
    brand: "BELLA + CANVAS",
    style: "3719",
    name: "Unisex Sponge Fleece Hoodie Sweatshirt",
    colors: ["Black", "White", "Navy", "True Royal", "Red", "Athletic Heather"],
    image: { src: "https://www.ssactivewear.com/Images/Color/37880_f_fm.jpg", alt: "BELLA + CANVAS 3719 Unisex Sponge Fleece Hoodie Sweatshirt in Black" },
  },
  {
    brand: "Independent Trading Co.",
    style: "SS4600QZ",
    name: "Unisex 8.5 oz. Midweight Quarter-Zip Pullover",
    colors: ["Black", "Grey Heather", "Alpine Green", "Asphalt", "Cement", "Bone"],
    image: { src: "https://www.ssactivewear.com/Images/Color/115804_f_fm.jpg", alt: "Independent Trading Co. SS4600QZ Unisex 8.5 oz. Midweight Quarter-Zip Pullover in Black" },
  },
  {
    brand: "Team 365",
    style: "TT31",
    name: "Men's Zone Performance Quarter-Zip Pullover",
    colors: ["Black", "White", "Sport Royal", "Sport Graphite", "Sport Dark Navy", "Sport Red"],
    image: { src: "https://www.ssactivewear.com/Images/Color/122053_f_fm.jpg", alt: "Team 365 TT31 Men's Zone Performance Quarter-Zip Pullover in Black" },
  },
  {
    brand: "CORE365",
    style: "CE405",
    name: "Men's Fusion ChromaSoft Pique Quarter-Zip Pullover",
    colors: ["Black", "White", "True Royal", "Forest", "Electric Blue", "Carbon Heather"],
    image: { src: "https://www.ssactivewear.com/Images/Color/119173_f_fm.jpg", alt: "CORE365 CE405 Men's Fusion ChromaSoft Pique Quarter-Zip Pullover in Black" },
  },
  {
    brand: "Adidas",
    style: "A401",
    name: "Men's Ultimate365 Lightweight Quarter-Zip Pullover",
    colors: ["Black", "White", "Collegiate Navy", "Black Heather", "Power Red", "Grey Three"],
    image: { src: "https://www.ssactivewear.com/Images/Color/78629_f_fm.jpg", alt: "Adidas A401 Men's Ultimate365 Lightweight Quarter-Zip Pullover in Black" },
  },
];

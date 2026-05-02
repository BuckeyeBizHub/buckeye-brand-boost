// Real uploaded photos from cloud storage - NEVER use AI-generated images
const STORAGE_BASE = "https://ustxmgctwrjdzcpsrewb.supabase.co/storage/v1/object/public/photos";

// Apparel
export const PHOTO_APPAREL_1 = `${STORAGE_BASE}/1774655725467-1jgr9908ywq.jpeg`;
export const PHOTO_APPAREL_2 = `${STORAGE_BASE}/1774655722831-ao8qp2g1u2v.jpeg`;
export const PHOTO_APPAREL_3 = `${STORAGE_BASE}/1774655679371-eqdfvxachig.jpeg`;

// Vehicle
export const PHOTO_VEHICLE_1 = `${STORAGE_BASE}/1774655763260-kgi50m9w187.jpeg`;
export const PHOTO_VEHICLE_2 = `${STORAGE_BASE}/1774655762017-jju3wbgu5a9.jpeg`;
export const PHOTO_VEHICLE_3 = `${STORAGE_BASE}/1774655760959-qbnukm8ala.jpeg`;
export const PHOTO_VEHICLE_4 = `${STORAGE_BASE}/1774655759800-sjthg623nhj.jpeg`;
export const PHOTO_VEHICLE_5 = `${STORAGE_BASE}/1774655757888-stneftofkpi.jpeg`;
export const PHOTO_VEHICLE_6 = `${STORAGE_BASE}/1774655757043-bcjuak3ub95.jpeg`;
export const PHOTO_VEHICLE_7 = `${STORAGE_BASE}/1774655755372-vtx5ed31i0j.jpeg`;

// Signage
export const PHOTO_SIGNAGE_1 = `${STORAGE_BASE}/1774656452932-8whcwx5xgru.jpeg`;
export const PHOTO_SIGNAGE_2 = `${STORAGE_BASE}/1774656451713-ra2xilr8paq.jpeg`;
export const PHOTO_SIGNAGE_3 = `${STORAGE_BASE}/1774656450515-q71sdwwln1.jpeg`;
export const PHOTO_SIGNAGE_4 = `${STORAGE_BASE}/1774656441796-n8x9y4eqcql.jpeg`;
export const PHOTO_SIGNAGE_5 = `${STORAGE_BASE}/1774656440646-dk0ofu2vvh.jpeg`;

// Print catalog
export const PHOTO_PRINT_1 = `${STORAGE_BASE}/1774656257263-rx655acwixc.jpg`;
export const PHOTO_PRINT_2 = `${STORAGE_BASE}/1774656256834-u09vsxgyf4n.jpg`;
export const PHOTO_PRINT_3 = `${STORAGE_BASE}/1774656246799-gdgtz8r6o0g.jpg`;
export const PHOTO_PRINT_4 = `${STORAGE_BASE}/1774656246238-wt5690en0bi.jpg`;
export const PHOTO_PRINT_5 = `${STORAGE_BASE}/1774656245549-n65fweb4y2.jpg`;
export const PHOTO_PRINT_6 = `${STORAGE_BASE}/1774656235848-i73gf59r7wg.jpg`;
export const PHOTO_PRINT_7 = `${STORAGE_BASE}/1774656235505-uvydfqv4e4.jpg`;
export const PHOTO_PRINT_8 = `${STORAGE_BASE}/1774656234934-lzdi8u99lop.jpg`;
export const PHOTO_PRINT_9 = `${STORAGE_BASE}/1774656226604-oxx5jbiwgoi.jpg`;
export const PHOTO_PRINT_10 = `${STORAGE_BASE}/1774656226201-zt18i2wmcyd.jpg`;
export const PHOTO_PRINT_11 = `${STORAGE_BASE}/1774656225519-e4pg03ju04d.jpg`;

// Newly uploaded gallery additions (bundled assets)
import GALLERY_ENVELOPE_URL from "@/assets/gallery/custom-design-envelope.jpg";
import GALLERY_GIFT_CERT_URL from "@/assets/gallery/custom-gift-certificate.jpg";
import GALLERY_GIFT_CERT_HOLDER_URL from "@/assets/gallery/custom-gift-certificate-holder.jpg";
import GALLERY_TENT_WALLS_URL from "@/assets/gallery/trade-show-tent-walls-sides.jpg";
import GALLERY_TENT_BACKWALL_URL from "@/assets/gallery/trade-show-tent-backwall.jpg";
import GALLERY_DESK_CALENDAR_URL from "@/assets/gallery/custom-desk-calendar.png";
import GALLERY_TEAR_OFF_CALENDAR_URL from "@/assets/gallery/custom-tear-off-calendar.jpg";

export const PHOTO_CUSTOM_ENVELOPE = GALLERY_ENVELOPE_URL;
export const PHOTO_GIFT_CERTIFICATE = GALLERY_GIFT_CERT_URL;
export const PHOTO_GIFT_CERTIFICATE_HOLDER = GALLERY_GIFT_CERT_HOLDER_URL;
export const PHOTO_TRADESHOW_TENT_WALLS = GALLERY_TENT_WALLS_URL;
export const PHOTO_TRADESHOW_TENT_BACKWALL = GALLERY_TENT_BACKWALL_URL;
export const PHOTO_DESK_CALENDAR = GALLERY_DESK_CALENDAR_URL;
export const PHOTO_TEAR_OFF_CALENDAR = GALLERY_TEAR_OFF_CALENDAR_URL;

// Convenience grouped exports
export const NEW_GALLERY_PHOTOS = [
  { src: PHOTO_CUSTOM_ENVELOPE, alt: "Custom designed business envelope by Buckeye Biz Hub in Columbus Ohio", category: "Business Printing" },
  { src: PHOTO_GIFT_CERTIFICATE, alt: "Custom printed gift certificate by Buckeye Biz Hub in Columbus Ohio", category: "Business Printing" },
  { src: PHOTO_GIFT_CERTIFICATE_HOLDER, alt: "Custom gift certificate holder folder by Buckeye Biz Hub in Columbus Ohio", category: "Business Printing" },
  { src: PHOTO_TRADESHOW_TENT_WALLS, alt: "Custom trade show tent with full walls and sides by Buckeye Biz Hub in Columbus Ohio", category: "Trade Show Displays" },
  { src: PHOTO_TRADESHOW_TENT_BACKWALL, alt: "Custom trade show tent with backwall by Buckeye Biz Hub in Columbus Ohio", category: "Trade Show Displays" },
  { src: PHOTO_DESK_CALENDAR, alt: "Custom branded desk calendar by Buckeye Biz Hub in Columbus Ohio", category: "Promotional Products" },
  { src: PHOTO_TEAR_OFF_CALENDAR, alt: "Custom tear-off daily calendar by Buckeye Biz Hub in Columbus Ohio", category: "Promotional Products" },
] as const;

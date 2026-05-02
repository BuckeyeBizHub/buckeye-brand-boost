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
import GALLERY_AMERICA_250_URL from "@/assets/gallery/america-250-custom-decal.png";
import GALLERY_BANNER_POSTER_MUSIC_URL from "@/assets/gallery/custom-banner-poster-music.png";
import GALLERY_GRAD_PARTY_SIGN_IN_URL from "@/assets/gallery/graduation-party-sign-in-sign.jpg";
import GALLERY_SPORTS_TRACK_URL from "@/assets/gallery/sports-yard-sign-track-field-2026.jpg";
import GALLERY_SPORTS_FOOTBALL_URL from "@/assets/gallery/sports-yard-sign-football-2026.jpg";
import GALLERY_GRAD_YARD_SIGN_URL from "@/assets/gallery/graduation-yard-sign.jpg";
import GALLERY_GRAD_INVITATION_URL from "@/assets/gallery/graduation-invitation-2026.jpg";
import GALLERY_GRAD_BANNER_URL from "@/assets/gallery/graduation-banner-2026.jpg";

export const PHOTO_CUSTOM_ENVELOPE = GALLERY_ENVELOPE_URL;
export const PHOTO_GIFT_CERTIFICATE = GALLERY_GIFT_CERT_URL;
export const PHOTO_GIFT_CERTIFICATE_HOLDER = GALLERY_GIFT_CERT_HOLDER_URL;
export const PHOTO_TRADESHOW_TENT_WALLS = GALLERY_TENT_WALLS_URL;
export const PHOTO_TRADESHOW_TENT_BACKWALL = GALLERY_TENT_BACKWALL_URL;
export const PHOTO_DESK_CALENDAR = GALLERY_DESK_CALENDAR_URL;
export const PHOTO_TEAR_OFF_CALENDAR = GALLERY_TEAR_OFF_CALENDAR_URL;
export const PHOTO_AMERICA_250_DECAL = GALLERY_AMERICA_250_URL;
export const PHOTO_BANNER_POSTER_MUSIC = GALLERY_BANNER_POSTER_MUSIC_URL;
export const PHOTO_GRAD_PARTY_SIGN_IN = GALLERY_GRAD_PARTY_SIGN_IN_URL;
export const PHOTO_SPORTS_YARD_SIGN_TRACK = GALLERY_SPORTS_TRACK_URL;
export const PHOTO_SPORTS_YARD_SIGN_FOOTBALL = GALLERY_SPORTS_FOOTBALL_URL;
export const PHOTO_GRADUATION_YARD_SIGN = GALLERY_GRAD_YARD_SIGN_URL;
export const PHOTO_GRADUATION_INVITATION = GALLERY_GRAD_INVITATION_URL;
export const PHOTO_GRADUATION_BANNER = GALLERY_GRAD_BANNER_URL;

// Convenience grouped exports
export const NEW_GALLERY_PHOTOS = [
  { src: PHOTO_CUSTOM_ENVELOPE, alt: "Custom designed business envelope by Buckeye Biz Hub in Columbus Ohio", category: "Business Printing" },
  { src: PHOTO_GIFT_CERTIFICATE, alt: "Custom printed gift certificate by Buckeye Biz Hub in Columbus Ohio", category: "Business Printing" },
  { src: PHOTO_GIFT_CERTIFICATE_HOLDER, alt: "Custom gift certificate holder folder by Buckeye Biz Hub in Columbus Ohio", category: "Business Printing" },
  { src: PHOTO_TRADESHOW_TENT_WALLS, alt: "Custom trade show tent with full walls and sides by Buckeye Biz Hub in Columbus Ohio", category: "Trade Show Displays" },
  { src: PHOTO_TRADESHOW_TENT_BACKWALL, alt: "Custom trade show tent with backwall by Buckeye Biz Hub in Columbus Ohio", category: "Trade Show Displays" },
  { src: PHOTO_DESK_CALENDAR, alt: "Custom branded desk calendar by Buckeye Biz Hub in Columbus Ohio", category: "Promotional Products" },
  { src: PHOTO_TEAR_OFF_CALENDAR, alt: "Custom tear-off daily calendar by Buckeye Biz Hub in Columbus Ohio", category: "Promotional Products" },
  { src: PHOTO_AMERICA_250_DECAL, alt: "America 250 commemorative custom decal by Buckeye Biz Hub in Columbus Ohio", category: "Decals & Stickers" },
  { src: PHOTO_BANNER_POSTER_MUSIC, alt: "Custom retirement celebration banner poster by Buckeye Biz Hub in Columbus Ohio", category: "Banners & Large Format" },
  { src: PHOTO_GRAD_PARTY_SIGN_IN, alt: "Graduation party sign-in sign printed by Buckeye Biz Hub in Columbus Ohio", category: "Graduation 2026" },
  { src: PHOTO_SPORTS_YARD_SIGN_TRACK, alt: "Track and field senior athlete yard sign by Buckeye Biz Hub in Columbus Ohio", category: "Yard Signs & Signage" },
  { src: PHOTO_SPORTS_YARD_SIGN_FOOTBALL, alt: "Football senior athlete yard sign by Buckeye Biz Hub in Columbus Ohio", category: "Yard Signs & Signage" },
  { src: PHOTO_GRADUATION_YARD_SIGN, alt: "Class of 2024 graduation yard sign by Buckeye Biz Hub in Columbus Ohio", category: "Graduation 2026" },
  { src: PHOTO_GRADUATION_INVITATION, alt: "Custom graduation party invitation by Buckeye Biz Hub in Columbus Ohio", category: "Graduation 2026" },
  { src: PHOTO_GRADUATION_BANNER, alt: "Congrats Grad outdoor graduation banner by Buckeye Biz Hub in Columbus Ohio", category: "Graduation 2026" },
] as const;

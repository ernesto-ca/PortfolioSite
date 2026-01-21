const IMAGE_MANIFEST: Record<string, string[]> = {
  deloitte: ["/images/professional/deloitte/deloitte1.png", "/images/professional/deloitte/deloitte2.png"],
  petco: ["/images/professional/petco/petco1.png", "/images/professional/petco/petco2.png"],
  zillow: ["/images/professional/zillow/zillow1.png", "/images/professional/zillow/zillow2.jpg"],
  geminotes: ["/images/opensource/geminotes/gemi1.jpg", "/images/opensource/geminotes/gemi2.jpg", "/images/opensource/geminotes/gemi3.jpg"],
  opencompose: ["/images/opensource/opencompose/compose1.png", "/images/opensource/opencompose/compose2.png",],
  topmovies: ["/images/project/topmovies/top1.png", "/images/project/topmovies/top2.png", "/images/project/topmovies/top3.png"],
  ecomed: ["/images/freelance/ecomed/eco1.png", "/images/freelance/ecomed/eco2.png", "/images/freelance/ecomed/eco3.png", "/images/freelance/ecomed/eco4.png" ],
  kingdomsmurfs: ["/images/freelance/kingdomsmurfs/king1.png", "/images/freelance/kingdomsmurfs/king2.png", "/images/freelance/kingdomsmurfs/king3.png", "/images/freelance/kingdomsmurfs/king4.png" ],
  certificates: ["/images/certificates/cert1.png", "/images/certificates/cert2.png", "/images/certificates/cert3.png", "/images/certificates/cert4.png", "/images/certificates/cert5.png", "/images/certificates/cert6.png", "/images/certificates/cert7.png", "/images/certificates/cert8.png", "/images/certificates/cert9.png"],
};


export const getCompanyImages = (company: string): string[] => {
  const key = company.toLowerCase().replace(/\s+/g, "");
  return IMAGE_MANIFEST[key] || ["/images/learning-with-canela-voxel.PNG"];
};

const IMAGE_MANIFEST: Record<string, string[]> = {
  deloitte: ["/PortfolioSite/images/professional/deloitte/deloitte1.png", "/PortfolioSite/images/professional/deloitte/deloitte2.png"],
  petco: ["/PortfolioSite/images/professional/petco/petco1.png", "/PortfolioSite/images/professional/petco/petco2.png"],
  zillow: ["/PortfolioSite/images/professional/zillow/zillow1.png", "/PortfolioSite/images/professional/zillow/zillow2.jpg"],
  geminotes: ["/PortfolioSite/images/opensource/geminotes/gemi1.jpg", "/PortfolioSite/images/opensource/geminotes/gemi2.jpg", "/PortfolioSite/images/opensource/geminotes/gemi3.jpg"],
  opencompose: ["/PortfolioSite/images/opensource/opencompose/compose1.png", "/PortfolioSite/images/opensource/opencompose/compose2.png",],
  topmovies: ["/PortfolioSite/images/project/topmovies/top1.png", "/PortfolioSite/images/project/topmovies/top2.png", "/PortfolioSite/images/project/topmovies/top3.png"],
  ecomed: ["/PortfolioSite/images/freelance/ecomed/eco1.png", "/PortfolioSite/images/freelance/ecomed/eco2.png", "/PortfolioSite/images/freelance/ecomed/eco3.png", "/PortfolioSite/images/freelance/ecomed/eco4.png" ],
  kingdomsmurfs: ["/PortfolioSite/images/freelance/kingdomsmurfs/king1.png", "/PortfolioSite/images/freelance/kingdomsmurfs/king2.png", "/PortfolioSite/images/freelance/kingdomsmurfs/king3.png", "/PortfolioSite/images/freelance/kingdomsmurfs/king4.png" ],
  certificates: ["/PortfolioSite/images/certificates/cert1.png", "/PortfolioSite/images/certificates/cert2.png", "/PortfolioSite/images/certificates/cert3.png", "/PortfolioSite/images/certificates/cert4.png", "/PortfolioSite/images/certificates/cert5.png", "/PortfolioSite/images/certificates/cert6.png", "/PortfolioSite/images/certificates/cert7.png", "/PortfolioSite/images/certificates/cert8.png", "/PortfolioSite/images/certificates/cert9.png"],
};


export const getCompanyImages = (company: string): string[] => {
  const key = company.toLowerCase().replace(/\s+/g, "");
  return IMAGE_MANIFEST[key] || ["/PortfolioSite/images/learning-with-canela-voxel.png"];
};

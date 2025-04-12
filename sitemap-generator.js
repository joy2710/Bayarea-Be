const express = require('express')
const xmlbuilder = require('xmlbuilder');
const moment = require('moment');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
// Define your application's routes
const routes = [
  '/home',
  '/showPage/PID19/Sample_Patents__Text_Listing_',
  '/showPage/PID53/Professionals',
  '/showPage/PID56/Firm_Overview',
  '/showPage/PID16/Practice_Areas_',
  '/showPage/PID16/Technical_Areas_Overview',
  '/showPage/PID122/Careers_',
  '/showPage/PID83/Confidentiality',
  '/showPage/PID103/Fee_Schedule',
  '/showPage/PID60/Contact_Us',
  '/sample-patent',
  '/showPage/PID54/Featured_Companies',
  '/showPage/Case---Study/Case_Studies',
  '/showPage/PID8/Patents',
  '/showPage/PID8/Patents__Overview',
  '/showPage/PID21/Utility_Patent_Application',
  '/showPage/PID18/Provisional_Patent',
  '/showPage/PID137/Foreign_Applications',
  '/showPage/PID144/Sample_Industries',
  '/showPage/PID34/Patentability_Legal_Opinion',
  '/showPage/PID11/Design_Patent_Application',
  '/showPage/PID30/FAQ__Patent_Services',
  '/showPage/PID33/Patent_Search',
  '/showPage/PID91/Flat_Fee_Patent_Research_Services',
  '/showPage/PID33/Patent_Research_Overview',
  '/showPage/PID52/PCT_International_Patents',
  '/showPage/PID145/Foreign_Filing__PCT_',
  '/showPage/PID145/PCT_national_stage_entry__General_Overview',
  '/showPage/PID143/Europe',
  '/showPage/PID139/Detailed_Overview',
  '/showPage/PID142/Non_Participating_Countries',
  '/showPage/PID143/Info_Resources',
  '/showPage/PID146/PCT_International_Application__Overview_',
  '/news',
  '/showPage/PID14/Trademark_Application',
  '/showPage/PID118/First_to_file__New_Law_',
  '/showPage/PID20/Software_Patent_Info',
  '/showPage/PID9/Business_Method_Patent_Info',
  '/showPage/PID31/Utility_Patent_Application_Information',
  '/showPage/PID73/Get_Funding',
  '/blogs',
  '/sitemap',
  '/service/',
  '/service-details/2/Request_for_prioritized_examination__Micro__',
  '/service-details/8/Request_for_prioritized_examination__Micro_',
  '/service-details/16/Search_Test_',
  '/service-details/17/Test_New',
  '/service-details/9/Utility_Application__Micro_',
  '/service-details/15/Utility_Application__Micro___Fully_Configured_menus_',
  '/service-details/1/Utility_Application__Micro_21',
  '/service-details/12/Utility_Application__Micro_21',
  '/blog-detail/11/Test',
  '/blog-detail/9/TV__FILM_&_MUSIC',
  '/blog-detail/6/Design_Patent_does_not_cover_the_Utility',
  '/blog-detail/15/Test_2_Software',
  '/blog-detail/2/Spec_must_support_any_new_CIP_claims',
  '/blog-detail/4/Why_do_a_Design_Patent_w__or_instead_of_a_Utility_',
  '/blog-detail/5/Design_Patent_only_allowed_if_it_has_no_functional_features',
  '/news-details/6/The_Supreme_Court_Decides_Enablement_Requirement_In_Re_Amgen,_Inc._v._Sanofi',
  '/news-details/8/Lorem_ipsum_Lorem_ipsum_',
  '/news-details/1/Alice_vs_CLS_',
  '/news-details/2/First-to-File_',
  '/news-details/3/Track_1_Fast_exam',
  '/news-details/4/Samsung_Americas_',
  '/news-details/5/patent_research',
 
];

  const date = moment(new Date()).format('YYYY-MMMM-DD');

app.get('/sitemap.xml', (req, res) => {
  const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
  root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  routes.forEach(route => {
    const url = root.ele('url');
    //url.ele('loc', `http://localhost:4200${route}`);
    // url.ele('loc', `https://dev.bayareaip.net${route}`);
     url.ele('loc', `https://stage.bayareaip.net${route}`);
    // url.ele('loc', `https://bayareaip.com${route}`);
    url.ele('lastmod', `${date}`);
  });

  res.header('Content-Type', 'application/xml');
  res.send(root.end({ pretty: true }));
});
// for download file http://localhost:3000/sitemap.xml
app.listen(PORT, () => { 
  console.log(`Server started on http://localhost:${PORT}`);
});
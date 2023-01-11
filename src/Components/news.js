import React  from 'react'
import NewsItems from './newsItems'
import InfiniteScroll from 'react-infinite-scroller';
import { useEffect, useState } from 'react';


export default function News(props) 
{
  //  let   a=[
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "New York Times"
  //               },
  //               "author": "Ronen Bergman, Patrick Kingsley, Raja Abdulrahim",
  //               "title": "Israel Strikes Gaza as Tensions Rise: Live Updates  The New York Times",
  //               "description": "A leader of a Palestinian militant group is among 10 people killed in an airstrike that follows a week of rising tensions.",
  //               "url": "https://www.nytimes.com/live/2022/08/05/world/israelgazaairstrikes",
  //               "urlToImage": "https://static01.nyt.com/images/2022/08/05/world/05Israelgazabriefing1/05Israelgazabriefing1facebookJumbo.jpg",
  //               "publishedAt": "20220805T18:25:58Z",
  //               "content": "TEL AVIV Israeli airstrikes hit several targets in the Gaza Strip on Friday, killing a number of people including a senior commander of a Palestinian militant group, in the deadliest escalation of vi… [+3592 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "thewashingtonpost",
  //               "name": "The Washington Post"
  //               },
  //               "author": "John Wagner",
  //               "title": "Fetterman to hold first campaign rally since suffering a stroke in May  The Washington Post",
  //               "description": "Pennsylvania Lt. Gov. John Fetterman, who suffered a stroke in May and has been recovering, will hold his first campaign rally next week in Erie County. Fetterman has held some fundraisers, but this would be his first major public event.",
  //               "url": "https://www.washingtonpost.com/politics/2022/08/05/fettermanpennsylvaniasenate/",
  //               "urlToImage": "https://www.washingtonpost.com/wpapps/imrs.php?src=https://arcanglerfishwashpostprodwashpost.s3.amazonaws.com/public/XJJ6ATXQJUI6ZLAWR67XDFGNPA.jpg&w=1440",
  //               "publishedAt": "20220805T18:10:00Z",
  //               "content": "Comment on this story\r\nPennsylvania Lt. Gov. John Fetterman, a Democratic Senate nominee, will hold his first public rally next week since suffering a neardeadly stroke four days before the May 17 p… [+2955 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "foxnews",
  //               "name": "Fox News"
  //               },
  //               "author": "Lauryn Overhultz",
  //               "title": "Rosie O'Donnell responds after daughter says her upbringing was 'not normal'  Fox News",
  //               "description": "Rosie O'Donnell's daughter Vivienne explained how her childhood was \"not normal\" in a viral TikTok. The comedian responded in her own TikTok video.",
  //               "url": "https://www.foxnews.com/entertainment/rosieodonnellrespondsafterdaughtersaysupbringingnotnormal",
  //               "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/Vivienne_Rosie_ODonnell.jpg",
  //               "publishedAt": "20220805T17:41:26Z",
  //               "content": "Rosie O'Donnell's daughter Vivienne is aware that her childhood was not \"normal.\"\r\nVivienne explained that her upbringing was not necessarily \"normal\" after she shared a story from her childhood in a… [+2088 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "reuters",
  //               "name": "Reuters"
  //               },
  //               "author": null,
  //               "title": "U.S. labor market defies recession fears as job growth surges in July  Reuters",
  //               "description": "U.S. job growth unexpectedly accelerated in July, lifting the level of employment above its prepandemic level and pouring cold water on fears the economy was in recession.",
  //               "url": "https://www.reuters.com/markets/us/usjobgrowthbeatsexpectationsunemploymentratefall3520220805/",
  //               "urlToImage": "https://www.reuters.com/resizer/Dlm5laq35NLYt9f3wdQrdRlfAmU=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/6R2RNAYCXFOK3BCGB2CQ4ONPYA.jpg",
  //               "publishedAt": "20220805T17:32:00Z",
  //               "content": "WASHINGTON, Aug 5 (Reuters)  U.S. job growth unexpectedly accelerated in July, lifting the level of employment above its prepandemic level and pouring cold water on fears the economy was in recessi… [+6000 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "Wccftech"
  //               },
  //               "author": "Jason R. Wilson",
  //               "title": "Intel’s AV1 Encoder Outclasses NVIDIA & AMD  Wccftech",
  //               "description": "YouTuber EposVox demonstrates the power of Intel's AV1 video encoder against NVIDIA and AMD, and how efficient it is for streaming.",
  //               "url": "https://wccftech.com/intelsav1encoderoutclassesnvidiaamd/",
  //               "urlToImage": "https://cdn.wccftech.com/wpcontent/uploads/2022/03/20220330_153237.jpg",
  //               "publishedAt": "20220805T17:18:43Z",
  //               "content": "Intel is the first GPU manufacturer to offer AV1 encoding capabilities within its Arc graphics lineup. Thanks to YouTuber EposVox, who tested the technology on an Arc A380 graphics card, we were luck… [+3321 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "TMZ"
  //               },
  //               "author": "TMZ Staff",
  //               "title": "Kanye West's 5th Divorce Lawyer Quits as Kim Kardashian Divorce Case Drags on  TMZ",
  //               "description": "Kanye West and Kim Kardashian's divorce continues to drag on ... Ye has officially lost his 5th divorce lawyer.",
  //               "url": "https://www.tmz.com/2022/08/05/kanyewestkimkardashiandivorcelawyerquits/",
  //               "urlToImage": "https://imagez.tmz.com/image/92/16by9/2022/08/05/9291a05b0c734d5bb8faddf8d77ffb74_xl.jpg",
  //               "publishedAt": "20220805T17:17:00Z",
  //               "content": "Kanye Westand Kim Kardashian's divorce continues to drag on ... Ye has officially lost his 5th divorce lawyer.\r\nKim and Kanye had a trialsetting conference Friday in L.A. as part of their divorce. Y… [+1309 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "theverge",
  //               "name": "The Verge"
  //               },
  //               "author": "Jennifer Pattison Tuohy",
  //               "title": "Amazon wants to map your home, so it bought iRobot  The Verge",
  //               "description": "Amazon’s $1.7 billion purchase of robot vacuum manufacturer iRobot may be about better understanding your home.",
  //               "url": "https://www.theverge.com/23293687/amazonirobotacquisitionpurchasesmarthomeintelligenceprivacyanalysis",
  //               "urlToImage": "https://cdn.voxcdn.com/thumbor/o1JRieY2OE0mmxy99TueTiqB8I0=/0x464:2048x1536/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/22831106/Roomba_j7__Alexa.jpg",
  //               "publishedAt": "20220805T17:08:45Z",
  //               "content": "Its purchase of iRobot brings Amazon muchneeded context for its ambient smart home ambitions.\r\nImage: iRobot\r\nWhen I spoke to iRobots Colin Angle earlier this summer, he said iRobot OS the latest so… [+5750 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "CNBC"
  //               },
  //               "author": "Spencer Kimball",
  //               "title": "New York polio case is the 'tip of the iceberg,' hundreds of others could be infected, health official says  CNBC",
  //               "description": "New York's top health official warned the polio case in an unvaccinated adult and the detection of the virus in sewage could indicate there's a larger outbreak.",
  //               "url": "https://www.cnbc.com/2022/08/05/newyorkpoliocasetipoficeberghundredsofotherscouldbeinfected.html",
  //               "urlToImage": "https://image.cnbcfm.com/api/v1/image/1070997631659715538189gettyimages150973075ti6200159.jpeg?v=1659715575&w=1920&h=1080",
  //               "publishedAt": "20220805T16:59:48Z",
  //               "content": "Hundreds could have polio after an adult in the New York City metro area caught the virus and suffered paralysis last month, the state's top health official said this week.\r\nNew York state Health Com… [+2956 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "New York Times"
  //               },
  //               "author": "Patricia Mazzei",
  //               "title": "Parkland Trial Reveals Depths of Families’ Sorrow  The New York Times",
  //               "description": "The rare trial of a gunman in a mass shooting has underscored how massacres shatter families and communities over time.",
  //               "url": "https://www.nytimes.com/2022/08/05/us/parklandshootingtrialvictimsfamilies.html",
  //               "urlToImage": "https://static01.nyt.com/images/2022/08/05/us/05parklandvictims1/05parklandvictims1facebookJumbo.jpg",
  //               "publishedAt": "20220805T16:05:01Z",
  //               "content": "The heartrending testimony concluded on Thursday after the jury deciding the fate of the gunman, Nikolas Cruz, toured the school building where the mass shooting took place. Prosecutors left the vie… [+922 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "CNBC"
  //               },
  //               "author": "Melissa Repko, Lauren Thomas",
  //               "title": "Bed Bath & Beyond is discontinuing a private brand as it tries to reverse declining sales  CNBC",
  //               "description": "The retailer had made an aggressive push into exclusive brands and touted them as a linchpin of its turnaround strategy.",
  //               "url": "https://www.cnbc.com/2022/08/05/bedbathbeyonddiscontinueswildsageprivatebrandasittriestoimprovesales.html",
  //               "urlToImage": "https://image.cnbcfm.com/api/v1/image/1069509661633102772579gettyimages1344286137img_4497_20211001110914538.jpeg?v=1659715136&w=1920&h=1080",
  //               "publishedAt": "20220805T15:55:47Z",
  //               "content": "Bed Bath &amp; Beyond is axing one of its private labels, Wild Sage, about a year after the company made an aggressive push into exclusive brands, at the time touted as a linchpin of its turnaround s… [+5215 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "thewashingtonpost",
  //               "name": "The Washington Post"
  //               },
  //               "author": "Peter Hermann, Jason Samenow, Paul Duggan",
  //               "title": "Wisconsin couple dead after lightning strike Thursday near White House  The Washington Post",
  //               "description": "Four people had been critically hurt in the strike in Lafayette Square. Two are dead, and two remain in critical condition, police said.",
  //               "url": "https://www.washingtonpost.com/dcmdva/2022/08/05/twodeadwhitehouselightning/",
  //               "urlToImage": "https://www.washingtonpost.com/wpapps/imrs.php?src=https://arcanglerfishwashpostprodwashpost.s3.amazonaws.com/public/PP2LHCVFRFG2DKFO6Q3BAPYW74.jpg&w=1440",
  //               "publishedAt": "20220805T15:51:00Z",
  //               "content": "Two of those hospitalized after an apparent lightning strike Thursday evening in Lafayette Square, just north of the White House, have died, a D.C. police spokesman said Friday.\r\nFour people two men … [+4020 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "CBS Sports"
  //               },
  //               "author": "",
  //               "title": "Prospect Watch: Top five youngsters moved at MLB trade deadline  CBS Sports",
  //               "description": "Some highly touted prospects found themselves on the move following Tuesday's trade deadline",
  //               "url": "https://www.cbssports.com/mlb/news/prospectwatchtopfiveyoungstersmovedatmlbtradedeadline/",
  //               "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/08/05/a0ee8c60c6bf4b239b64d26f504c567c/thumbnail/1200x675/7fc5fa215a79aafba5d08f94b9b6f4ae/untitleddesign20220805t104552505.png",
  //               "publishedAt": "20220805T15:47:26Z",
  //               "content": "You may have heard that Major League Baseball's trade deadline passed on Tuesday night. (If not, you can use our handy trade tracker to catch up on all of the moves from the past several weeks.) As s… [+2939 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "thewashingtonpost",
  //               "name": "The Washington Post"
  //               },
  //               "author": "Ellen Francis, Grace Moon, Robyn Dixon",
  //               "title": "RussiaUkraine war latest updates  The Washington Post",
  //               "description": "Three ships are exporting grain from Ukraine’s Black Sea ports. President Biden described Brittney Griner’s sentencing as “unacceptable.”",
  //               "url": "https://www.washingtonpost.com/world/2022/08/05/russiaukrainewarlatestupdates/",
  //               "urlToImage": "https://www.washingtonpost.com/wpapps/imrs.php?src=https://arcanglerfishwashpostprodwashpost.s3.amazonaws.com/public/GI4R26AURAI63BECA3A4QTHI6I.jpg&w=1440",
  //               "publishedAt": "20220805T15:46:00Z",
  //               "content": null
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "The Guardian"
  //               },
  //               "author": "Jason Burke",
  //               "title": "AlQaida chief’s killing comes as group gains ground in African conflict zones  The Guardian",
  //               "description": "UN says terror organisation, whose affiliate recently attacked Mali’s most important military base, ‘is once again the leader of global jihad’",
  //               "url": "https://amp.theguardian.com/world/2022/aug/05/alqaidachiefskillingcomesasgroupgainsgroundinafricanconflictzones",
  //               "urlToImage": "https://i.guim.co.uk/img/media/408c256bfcc5c2c7ad2fda0f85d47c0e67a01e47/0_280_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=37037d529fe259019fd7a080bad74185",
  //               "publishedAt": "20220805T15:36:00Z",
  //               "content": "It was one of Ayman alZawahiris last victories. Just over a week before the alQaida leader was killed in Kabul by missiles fired from a US drone, militants from the organisations biggest affiliate … [+6464 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "reuters",
  //               "name": "Reuters"
  //               },
  //               "author": null,
  //               "title": "Texas governor sends migrants to New York City as immigration standoff accelerates  Reuters Canada",
  //               "description": "Texas Governor Greg Abbott, a Republican, said on Friday he has started to send buses carrying migrants to New York City in an effort to push responsibility for border crossers to Democratic mayors and U.S. President Joe Biden, a Democrat.",
  //               "url": "https://www.reuters.com/world/americas/texasgovernorsendsmigrantsnewyorkcityimmigrationstandoffaccelerates20220805/",
  //               "urlToImage": "https://www.reuters.com/resizer/4d_kAZAP_UmSlXjQRrbrHod2u8=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/WTELCEWRNVKRJGSARDDN5BHELM.jpg",
  //               "publishedAt": "20220805T15:35:00Z",
  //               "content": "NEW YORK, Aug 5 (Reuters)  Texas Governor Greg Abbott, a Republican, said on Friday he has started to send buses carrying migrants to New York City in an effort to push responsibility for border cro… [+2761 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "Page Six"
  //               },
  //               "author": "Francesca Bacardi",
  //               "title": "Jennette McCurdy reveals what 'broke' her while working with Ariana Grande  Page Six",
  //               "description": "The “iCarly” star ultimately quit Hollywood after growing resentful about how she was treated as a child star at Nickelodeon.",
  //               "url": "https://pagesix.com/2022/08/05/jennettemccurdyrevealsbreakingpointwitharianagrande/",
  //               "urlToImage": "https://pagesix.com/wpcontent/uploads/sites/3/2022/08/jennettemccurdyarianagrande.jpg?quality=75&strip=all&w=1200",
  //               "publishedAt": "20220805T15:27:00Z",
  //               "content": "An incident involving Tom Hanks “broke” Jennette McCurdy while working with Ariana Grande.\r\nIn an excerpt from her new memoir, McCurdy claims Nickelodeon treated her differently than Grande while the… [+1710 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "Deadline"
  //               },
  //               "author": "Denise Petski",
  //               "title": "‘Batgirl’ Directors Share Message Of Support From Kevin Feige After Film’s Axing  Deadline",
  //               "description": "Batgirl directors Adil El Arbi and Bilall Fallah have passed along a message of support from Marvel Studios president Kevin Feige following the axing of their film by Warner Bros. Captioned “Thanks brother Kevin,” El Arbi shared Feige’s message posted on Inst…",
  //               "url": "https://deadline.com/2022/08/batgirldirectorsmessagesupportkevinfeigeafterfilmsaxing1235085887/",
  //               "urlToImage": "https://deadline.com/wpcontent/uploads/2022/08/KevinFeigeBatgirl.jpg?w=1000",
  //               "publishedAt": "20220805T15:19:00Z",
  //               "content": "Batgirldirectors Adil El Arbi and Bilall Fallah have passed along a message of support from Marvel Studios president Kevin Feige following the axing of their film by Warner Bros.\r\nCaptioned “Thanks b… [+1199 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": "cnn",
  //               "name": "CNN"
  //               },
  //               "author": "Tami Luhby, CNN",
  //               "title": "Workers in these two industries are the only ones coming out ahead right now  CNN",
  //               "description": "At first glance, it looks like many Americans got big pay raises since the Covid19 pandemic started.",
  //               "url": "https://www.cnn.com/2022/08/05/economy/hospitalityretailworkerwagesinflation/index.html",
  //               "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220729172053usretailstoreworkerrestrictedsupertease.jpg",
  //               "publishedAt": "20220805T15:18:00Z",
  //               "content": "(CNN)At first glance, it looks like many Americans got big pay raises since the Covid19 pandemicstarted. \r\nBut in reality, only workers intwo industries  leisure and hospitality and retail trade … [+3596 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "Yahoo Entertainment"
  //               },
  //               "author": "Matt Harmon",
  //               "title": "2022 NFL training camp fantasy football notes: Why did Josh Jacobs play in the Hall of Fame game?  Yahoo Sports",
  //               "description": "Fantasy Football analyst Matt Harmon delivers all the latest he's been hearing from training camp through August 5.",
  //               "url": "https://sports.yahoo.com/2022nfltrainingcampfantasyfootballnoteswhydidjoshjacobsplayinthehalloffamegame150500525.html",
  //               "urlToImage": "https://s.yimg.com/ny/api/res/1.2/TGQCx9E7JynYR8KelLy87w/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://s.yimg.com/os/creatruploadedimages/202208/82e5daf014c811edadfbcea99c3fdcc3",
  //               "publishedAt": "20220805T15:05:00Z",
  //               "content": "Each week this preseason, fantasy football analyst Matt Harmon will be sifting through all the training camp noise to uncover relevant signal key information that fantasy drafters can use to their ad… [+12234 chars]"
  //               },
  //               {
  //               "source": {
  //               "id": null,
  //               "name": "fox6now.com"
  //               },
  //               "author": "Jason Calvi",
  //               "title": "2024 Republican National Convention: Milwaukee selected to host  FOX 6 Milwaukee",
  //               "description": "Republicans have unanimously voted to select Milwaukee to host its 2024 national convention, where the party's presidential nominee will be officially named.",
  //               "url": "https://www.fox6now.com/news/2024republicannationalconventionhostcitymilwaukee",
  //               "urlToImage": "https://images.foxtv.com/static.fox6now.com/www.fox6now.com/content/uploads/2022/08/1280/720/snapshot94.jpg?ve=1&tl=1",
  //               "publishedAt": "20220805T15:01:26Z",
  //               "content": "CHICAGO  Republicans on Friday unanimously chose Milwaukee in swing state Wisconsin for the 2024 national convention, a win for the city on the shores of Lake Michigan after its hosting of the Democ… [+14150 chars]"
  //               }
  //          ]

      const [articles, setarticles]= useState([]);
      const [page, setpage] = useState(1);
      const [results, setresults] = useState(37);

      
    const UpdateContent =async()=>
    {

         props.setProgress(10);
         let promis=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
         props.setProgress(50);
         let data= await promis.json();

         setarticles(data.articles);
         setresults(data.totalResults);       
         setpage(1);   

         props.setProgress(100);
    }


    useEffect(() => {
    
       UpdateContent();
    
    }, [])
    
    const loadFunc= async()=>
    {    

         let promis=await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`);
         let data= await promis.json();

         setarticles(articles.concat(data.articles));
         setresults(articles.length);
         setpage(page+1); 

    }
    let key=0;
    return (
              <>
                <h2 style={(props.mode==="light")?{ textShadow:"3px 3px 3px Black", marginTop:"85px",textAlign:"center",color:"rgb(47, 128, 241)"}:{textShadow:"3px 3px 3px rgb(47, 128, 241)",marginTop:"85px",textAlign:"center",color:"white"} }>NewsMonkey  Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines</h2>
                <InfiniteScroll loadMore={loadFunc} hasMore={articles.length!==results} loader={<img style={{position:'relative', top:'20px',left:'48%' ,marginBottom:"30px"}}src="./loading.gif" alt="loading" />} >
                <div  className="container">
                  <div  className='row' style={{marginLeft:'100px',marginTop:'0px'}}>
                  { articles.map((elem)=>{
                                          return( 
                                                  <div key={key+=1} className='col-md-3' style={{marginLeft:"-20px"}}>      
                                                    <NewsItems title={`${(elem.title===undefined ||elem.title===null )?"No Title":elem.title.slice(0,50)}...`} src={elem.urlToImage} des={`${(elem.description===null)?"": elem.description.slice(0,75)}...` } url={elem.url} Author={ (!elem.author)?"Unknown":`${elem.author.slice(0,7)}...`}  date={elem.publishedAt.replace("T"," ").replace("Z","")} source={elem.source.name.slice(0,15) } mode={props.mode}/>
                                                  </div>         
                                                )
                                          }
                                )
                  }
                  </div>
                </div>
                </InfiniteScroll>
              
                                          {/* .filter((elem)=>{

                                                                          return elem.source.name.search("The Verge")!==1    
                                                                            }) */}
                  
              </>
    )
  }


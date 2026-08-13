/**
 * @file faq.js
 * @description Renders the FAQ section of the website, providing answers to common questions about the "ချိတ်" project and its services.
 * @module components/faq
 */

export function mountFAQ() {
  const section = document.getElementById("faq");
  if (!section) return;

  section.innerHTML = `
    <div class="container-fluid gray-blue-gradient pt-3">
      <div class="justify-content-center p-0 d-flex m-3" style="padding-right: 50px">
        <h1>Frequently <span class="textaccent">Asked Questions</span></h1>
      </div>

      <div class="row m-0">
        <div class="col-sm-6 d-flex">
            <div class="m-2 p-2">
                <details>
                    <summary>
                        <h2 class="mb-3">
                            တက္ကသိုလ်ဝင်ခွင့်အတွက်၊ ပညာသင်ဆုအတွက်
                            ဘာတွေများ လိုအပ်ပါသလဲ။
                            <span class="textaccent"
                                >ဘာတွေများ ကြိုပြင်ဆင်ထားနိုင်မလဲ။</span
                            >
                        </h2>
                    </summary>
                    <p>
                        ကျောင်းလျှောက်ဖို့နဲ့ ပညာသင်ဆု လျှောက်ဖို့
                        အရေးကြီးဆုံးကတော့ အထက်တန်း အောင်လက်မှတ်ပါ။
                        မြန်မာကျောင်းသားတွေကြားမှာ လူသိအများဆုံး
                        အထက်တန်း သင်ရိုးတွေကတော့ GED, IGCSE + IAL, OSSD,
                        IBDP, American G12 နဲ့ Burmese National
                        Curriculum တို့ ဖြစ်ကြပါတယ်။
                        လျှောက်ထားမယ့်နိုင်ငံတွေ အပေါ်မူတည်ပြီး
                        သင်ရိုးလက်ခံမှု ကွာခြားနိုင်ပါတယ်။
                        အကြမ်းအားဖြင့်တော့ IGCSE + IAL, IBDP နဲ့
                        American G12 (Supplemented with AP Curriculum)
                        ကတော့ ဘယ်နိုင်ငံ လျှောက်လျှောက်​ ရနိုင်တဲ့
                        သင်ရိုးကြီး သုံးခု ဖြစ်ပါတယ်။
                        <br />
                        <span> </span>
                        <br />
                        ဒီအထက်တန်းအောင်လက်မှတ်အပြင် တက္ကသိုလ်နဲ့
                        နိုင်ငံပေါ်မူတည်ပြီး SAT, ACT စတဲ့ Standardized
                        Test တွေအပြင် University က ကြီးမှူးတဲ့ Entrance
                        Test တွေ၊ UCAT, LNAT စတဲ့ Professional School
                        တွေအတွက် Test တွေ ဖြေရကောင်း ဖြေရနိုင်ပါတယ်။
                        ဒါ့အပြင် IELTS, TOEFL, Duolingo စတဲ့ English
                        Proficiency Test တွေလည်း လိုအပ်နိုင်ပါတယ်။
                        <br />
                        <span> </span>
                        <br />
                        ဒါ့အပြင် Extracurricular Activities လို့ ခေါ်တဲ့
                        သင်ရိုးပြင်ပလှုပ်ရှားမှုတွေ၊ မိမိစိတ်ဝင်စားရာ
                        အားကစားနဲ့ ဘာသာရပ်တွေမှာ ရရှိထားတဲ့ ဆုတံဆိပ်တွေ၊
                        စိတ်အားထက်သန်ရာကို ပြသနိုင်မယ့် Volunteer
                        လုပ်ဆောင်မှုတွေလည်း ရှိထားဖို့ အရေးကြီးပါတယ်။
                        Persuasive Essay Writing Skills, Interviewing
                        Experience နဲ့ Research Skills တွေလည်း ရှိထားရင်
                        အကောင်းဆုံး ဖြစ်ပါတယ်။
                    </p>
                </details>
            </div>
                </div>
                <div class="col-sm-6 d-flex">
                    <div class="m-2 p-2">
                        <details>
                            <summary>
                                <h2 class="mb-3">
                                    “ချိတ် - The Hook”ကနေပြီး
                                    ကျောင်းလျှောက်ဖို့အတွက်
                                    <span class="textaccent"
                                        >ဘယ်လိုအကူအညီတွေ ရနိုင်မလဲ။
                                    </span>
                                </h2>
                            </summary>
                            <p>
                                အခုလက်ရှိအချိန်အတွက် အထိရောက်ဆုံး ဖြစ်မယ့်
                                Program ကတော့ “တက္ကသိုလ်များဆီသို့ (Global)”
                                College Admissions Advising Program ဖြစ်ပါတယ်။
                                <a
                                    class="d-inline-flex"
                                    href="https://www.google.com/url?q=https://docs.google.com/forms/d/e/1FAIpQLSf4pknYO2KCBWIgbzz2FowlWdgTNbnplDcVZgvetM3VgDMKvQ/viewform&sa=D&source=docs&ust=1755242009332781&usg=AOvVaw0ND7MI0P6H-GKZZk9KJ4-u"
                                >
                                    ဒီကနေပြီး
                                </a>
                                လျှောက်ထားနိုင်ပါတယ်။ UK, Australia, Hong Kong
                                အပါအဝင် နိုင်ငံ ဆယ်နိုင်ငံထက်မနည်းကို
                                ကျောင်းလျှောက်ထားရာမှာ ဒီ Program က
                                ကူညီပေးနိုင်မှာ ဖြစ်ပါတယ်။ ကူညီပေးမယ့် Advisors
                                တွေ ကိုယ်တိုင်ကလည်း ထိပ်တန်း တက္ကသိုလ်မှာ
                                တက်ရောက်နေတဲ့ မြန်မာကျောင်းသားတွေပဲမို့
                                အထိရောက်ဆုံး အကူအညီတွေ ပေးနိုင်မှာ ဖြစ်ပါတယ်။
                                <br />
                                <span> </span>
                                <br />
                                ဒါ့အပြင် “ချိတ်”ကနေပြီး Host ထားတဲ့ Webinar
                                တွေကနေလည်း အချက်အလက်ပေါင်းများစွာ ရနိုင်ပါတယ်။
                                နိုင်ငံပေါင်း ၂၀ ကျော်ရဲ့ ပညာသင်ဆုနဲ့ တက္ကသိုလ်
                                ဝင်ခွင့်အကြောင်းတွေကို ရှင်းပြတဲ့ “Above &
                                Beyond” Series, အထက်တန်းပညာသင်ဆုတွေ အကြောင်း
                                ရှင်းပြတဲ့ “A Stepping Stone” Series,
                                အမေရိကန်နိုင်ငံရဲ့ Undergraduate အကြောင်း
                                ခရေစေ့တွင်းကျ ပြောပြထားတဲ့ “ကျောင်းလျှောက်ကြမယ်”
                                Series စတာတွေကို
                                <a class="d-inline-flex" href="/events.html">
                                    ဒီမှာ
                                </a>
                                သွားရောက် ကြည့်ရှုနိုင်ပါတယ်။
                                <br />
                                <span> </span>
                                <br />
                                အမြန်ဆုံးနဲ့ အပြည့်စုံဆုံးဖြစ်တဲ့ Information
                                တွေကိုတော့ “ချိတ်”ရဲ့
                                <a href="/articles.html">Content</a> တွေကနေ
                                သိနိုင်ပါတယ်။ ထိပ်တန်းကျောင်းတွေ ဝင်ခွင့်ရ
                                မြန်မာကျောင်းသားတွေရဲ့ Essay တွေကိုတော့
                                <a href="/events.html#SuTuPyu"
                                    >“စုတုပြု” Series</a
                                >
                                ကနေ လေ့လာနိုင်ပါတယ်။
                                <br />
                                <span> </span>
                                <br />
                                <span class="textaccent">
                                    “ချိတ် - The Hook” အနေနဲ့ အခုချိန်ထိတော့
                                    Undergraduate အတွက်သာ အကူအညီပေးနိုင်သေးတာ
                                    ဖြစ်ပြီး Master/Postgraduate Degree ,
                                    PhD/Doctorate Degree တွေအတွက်တော့
                                    အကူအညီပေးနိုင်ခြင်း မရှိသေးပါဘူး။
                                </span>
                            </p>
                        </details>
                    </div>
                </div>
                <div class="col-sm-6 d-flex">
                    <div class="m-2 p-2">
                        <details>
                            <summary>
                                <h2 class="mb-3">
                                    “ချိတ် - The Hook”မှာ Volunteer အနေနဲ့​
                                    လုပ်အားပေးချင်ပါတယ်။
                                    <span class="textaccent"
                                        >ဘယ်လိုများ ဆက်သွယ်လို့ရနိုင်မလဲ။
                                    </span>
                                </h2>
                            </summary>
                            <p>
                                “ချိတ်” ကနေပြီး Volunteer ခေါ်မယ်ဆိုရင် Facebook
                                Page ကနေပြီး ကြေညာပါလိမ့်မယ်။ တနှစ် အနည်းဆုံး
                                တကြိမ်တော့ “ချိတ်” ကနေပြီး Volunteer အသစ်
                                ခေါ်ယူလေ့ရှိပါတယ်။
                            </p>
                        </details>
                    </div>
                </div>
                <div class="col-sm-6 d-flex">
                    <div class="m-2 p-2">
                        <details>
                            <summary>
                                <h2 class="mb-3">
                                    “ချိတ် - The Hook” ကို တခြား မေးချင်တာတွေ
                                    ရှိပါသေးတယ်။
                                    <span class="textaccent"
                                        >ဘယ်ကနေပြီး ဆက်သွယ်နိုင်ပါမလဲ။
                                    </span>
                                </h2>
                            </summary>
                            <p>
                                “ချိတ် - The Hook” Facebook Page ရဲ့ ChatBox
                                ကနေပြီး အမြန်ဆုံး ဆက်သွယ်နိုင်ပါတယ်။ ဒါ့အပြင်
                                “ချိတ် - The Hook Q&A” Facebook Group,

                                <a
                                    class="d-inline-flex"
                                    href="mailto:chatethehook@gmail.com"
                                    >chatethehook@gmail.com
                                </a>
                                စတာတွေမှာလည်း မေးခွန်းတွေ မေးမြန်းနိုင်ပါတယ်။
                            </p>
                        </details>
                    </div>
                </div>
              </div>
      </div>
    </div>
  `;
}

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ChevronDown, ChevronUp } from "lucide-react";


// CATEGORY TYPES

type Category =
  | "Workshops"
  | "Hackathons"
  | "Technical Events"
  | "Projects"
  | "Fun Activities";

// EVENT TYPE STRUCTURE

type GalleryEvent = {
  id: string;
  title: string;
  category: Category;
  description: string;
  photos: { id: string; url: string; caption?: string }[];
};


// EVENTS DATA (ADD THE EVENTS HERE)
const events: GalleryEvent[] = [
  {
    id: "chaos-or-release",
    title: "Chaos Or Release?",
    category: "Technical Events",
    description: "A DevOps decision-making challenge where teams navigated real-world deployment scenarios.",
    photos: [
      { id: "1", url: "https://drive.google.com/uc?export=view&id=1E4BwUw4s1NHQvbmU4B_gSmFow3DXUbna", caption: "" },
      { id: "2", url: "https://drive.google.com/uc?export=view&id=15yjF6OBegjHJGZjyDgMv7Pj0xJ8jtn6O", caption: "" },
      { id: "3", url: "https://drive.google.com/uc?export=view&id=1y1Y9WICtM6wETjDB8Y3ylk7CdkburNzC", caption: "" },
      { id: "4", url: "https://drive.google.com/uc?export=view&id=1LE5WwYhOiPBxrsBj0UBMnveh7PoJ5-0z", caption: "" },
      { id: "5", url: "https://drive.google.com/uc?export=view&id=1Q2dhKe_v_yMoRUoqMnzxGfbCnoMUoQNI", caption: "" },
      { id: "6", url: "https://drive.google.com/uc?export=view&id=1Cb0YXuu1ncLslvmNk5YC4bOJO1i5Ha2U", caption: "" },
      { id: "7", url: "https://drive.google.com/uc?export=view&id=1VskbkszWNK-ZeD5eNwgVfkisHixo1UnG", caption: "" },
      { id: "8", url: "https://drive.google.com/uc?export=view&id=1WMrdTv4dP7RjXgXn1dgboQ_rhmF0EmLf", caption: "" },
      { id: "9", url: "https://drive.google.com/uc?export=view&id=198F-ZFDp3-wyn0fI-li4786U3MLpqSOQ", caption: "" },
      { id: "10", url: "https://drive.google.com/uc?export=view&id=1tItE7KrdQwe0zlBERg06N5kjnfR-uKo7", caption: "" },
      { id: "11", url: "https://drive.google.com/uc?export=view&id=131IkaaCZEoIZuT6U6P3oKDKN9scoJM4T", caption: "" },
      { id: "12", url: "https://drive.google.com/uc?export=view&id=1vqBypZlhENYhA_cZXUnqOwTwDIYF9uxh", caption: "" },
      { id: "13", url: "https://drive.google.com/uc?export=view&id=12dFC4d7BJu5R0VJd7bL9aV3PKOdYTiDP", caption: "" },
      { id: "14", url: "https://drive.google.com/uc?export=view&id=1quQzP1TYYyHCH50NAqjwedrdSncgbp_T", caption: "" },
      { id: "15", url: "https://drive.google.com/uc?export=view&id=1-OvabNWT6VHkaB6lBw35yzZpNqMlz4m5", caption: "" },
      { id: "16", url: "https://drive.google.com/uc?export=view&id=1oCsKdC96rHJ6FfFhIN5VOSIYf_1IVrwc", caption: "" },
      { id: "17", url: "https://drive.google.com/uc?export=view&id=1dWJeLetufrWMk8DI8yj8ETTuRzNep5oB", caption: "" },
      { id: "18", url: "https://drive.google.com/uc?export=view&id=1hmBc6D-hU3fZmcP1yvopdXzsqe7DBYiV", caption: "" },
      { id: "19", url: "https://drive.google.com/uc?export=view&id=1A3wa9hw5x3Jpe1nDrYRebaleujs5d6xe", caption: "" },
      { id: "20", url: "https://drive.google.com/uc?export=view&id=1s508BEq_EFy2GP6PT1rVx5t-7kJinKpZ", caption: "" },
      { id: "21", url: "https://drive.google.com/uc?export=view&id=1T7GhtsNMw8npLq0JW4wgzxMTJ2NLCC4P", caption: "" },
      { id: "22", url: "https://drive.google.com/uc?export=view&id=1QjwDdwx-VB46rotWYrm2yqegt77qrB4D", caption: "" },
      { id: "23", url: "https://drive.google.com/uc?export=view&id=1Fkd5I4d2uFr99aqUG3EE7GFY0RfnUvv8", caption: "" },
      { id: "24", url: "https://drive.google.com/uc?export=view&id=1gxzDmmKVNoOdLx2pLdQr-kogLb0tYzPc", caption: "" },
      { id: "25", url: "https://drive.google.com/uc?export=view&id=1-teNhjq3g6Uod4rsy85SZyGD1CqWuuY2", caption: "" },
      { id: "26", url: "https://drive.google.com/uc?export=view&id=1Sbn9xFQYhFje7Oua1DvTnuUFxcXNKQCO", caption: "" },
      { id: "27", url: "https://drive.google.com/uc?export=view&id=17Bf99xfxRX49r5ZX3I8GLVCVuXl4Fjs2", caption: "" },
      { id: "28", url: "https://drive.google.com/uc?export=view&id=1NTWeFI1sdkIdmVdU_YvAyAoQ4VqLHqRM", caption: "" },
      { id: "29", url: "https://drive.google.com/uc?export=view&id=1Divl9qCAihtZ7K6VHZCM37QPn8UAfuOH", caption: "" },
      { id: "30", url: "https://drive.google.com/uc?export=view&id=1fq039m8k8doGgbV03A9zuQ0HDe1WsMDq", caption: "" },
      { id: "31", url: "https://drive.google.com/uc?export=view&id=1vOGNY9rTA2FtOc7ruy8N6Oo03SamHZdN", caption: "" },
      { id: "32", url: "https://drive.google.com/uc?export=view&id=1hvBT5NzO4Ze7zDriHMqsQ8OHmGYmEk39", caption: "" },
      { id: "33", url: "https://drive.google.com/uc?export=view&id=1WYfccXEC4vsOpZo2BNcl-eetRf_BmSnr", caption: "" },
      { id: "34", url: "https://drive.google.com/uc?export=view&id=1FM4rX7QQvYI18omTuhq1whlsLb4K3Og4", caption: "" },
      { id: "35", url: "https://drive.google.com/uc?export=view&id=1Rw7tA7x57Rqw0rRX1h9fGwXGS2aNewzI", caption: "" },
      { id: "36", url: "https://drive.google.com/uc?export=view&id=1Qw1r2P1bm7fKaepLKvhzfxhslEw9CJYr", caption: "" },
      { id: "37", url: "https://drive.google.com/uc?export=view&id=1rAXHgh6atSQbl6RsmGCN0WI5Zvss_aoX", caption: "" },
      { id: "38", url: "https://drive.google.com/uc?export=view&id=1-ZthshPEEbAOayKQ3QmOZCGrcM_DzIxt", caption: "" },
      { id: "39", url: "https://drive.google.com/uc?export=view&id=1mE64pa7W-152BFnJL3AzJoMd9qGXXrl2", caption: "" },
      { id: "40", url: "https://drive.google.com/uc?export=view&id=1j--FUBmIAj1B6Nx-_Cvf_6T6SJF0HnoH", caption: "" },
      { id: "41", url: "https://drive.google.com/uc?export=view&id=154rvzymW7p7GIsts9TdshNnEHNgh8YYO", caption: "" },
      { id: "42", url: "https://drive.google.com/uc?export=view&id=1Y4S2JLygN17PU0o0D5Xv2bJD7i18gJ1w", caption: "" },
      { id: "43", url: "https://drive.google.com/uc?export=view&id=1obzSyIGmT1mjaTED95dc9r8u2KlE_Ict", caption: "" },
      { id: "44", url: "https://drive.google.com/uc?export=view&id=1LeqqZC_fy2cfMQNEx4yGUt-B7IYmqCT7", caption: "" },
      { id: "45", url: "https://drive.google.com/uc?export=view&id=1xfUOvl7WnOjMnfoimkdPG8f4Eu5kDh0R", caption: "" },
      { id: "46", url: "https://drive.google.com/uc?export=view&id=1soYgPZPsaVnbZxflbEJuf97ncBcyphyd", caption: "" },
      { id: "47", url: "https://drive.google.com/uc?export=view&id=1-XbyfLb9FYb5d7UYwzYeBQxijLlj-k6r", caption: "" },
      { id: "48", url: "https://drive.google.com/uc?export=view&id=1hjaKDULqp9YnuqF_aYFPPUvHoKt_9xiR", caption: "" },
      { id: "49", url: "https://drive.google.com/uc?export=view&id=1YVcBoP5VsQyajVQpZS9QSXHTsWnd60Xk", caption: "" },
      { id: "50", url: "https://drive.google.com/uc?export=view&id=13xpyah_1xOfl6AR6cGMAhiHpil9HfMpT", caption: "" },
      { id: "51", url: "https://drive.google.com/uc?export=view&id=1SMxFajD6WKDLbAX-W18PAUjF4XffBHSl", caption: "" },
      { id: "52", url: "https://drive.google.com/uc?export=view&id=1b5Nua_dgSz2VyRPMmq-F-vURN3_bVhI3", caption: "" },
      { id: "53", url: "https://drive.google.com/uc?export=view&id=1gvAdeKAbaPO6wPOeTFyGTHU7tltVTbJh", caption: "" },
      { id: "54", url: "https://drive.google.com/uc?export=view&id=1mRBcFYyStEzHQ_xjfRBNKJBPXexGdkC3", caption: "" },
      { id: "55", url: "https://drive.google.com/uc?export=view&id=19gpGuPs3CcrhGksR6OFNm_zBMh-D0mLg", caption: "" },
      { id: "56", url: "https://drive.google.com/uc?export=view&id=1k3S-ISuZ8pZcBpqkMj9RFpqkRuJJZSoU", caption: "" },
      { id: "57", url: "https://drive.google.com/uc?export=view&id=1j_qMZo8-6SGX23Lo_zFhPlOaonbmRRum", caption: "" },
      { id: "58", url: "https://drive.google.com/uc?export=view&id=1sGedlsAREEJcvZgtH6m8S4JF0hYqqeu2", caption: "" },
      { id: "59", url: "https://drive.google.com/uc?export=view&id=1GLR2DiEd0SFs3z2R-NECFVYQiyr5qFMu", caption: "" },
      { id: "60", url: "https://drive.google.com/uc?export=view&id=1Bq-Eyc46TillXHHRdva_fZ8ZAoxfzhqC", caption: "" },
      { id: "61", url: "https://drive.google.com/uc?export=view&id=1MpqaM49iwTcfw2kQAySHQwo6gEE6we4m", caption: "" },
      { id: "62", url: "https://drive.google.com/uc?export=view&id=1kR6b-MVLKYuwKJ_zrVzgXa4eDtPVc32j", caption: "" },
      { id: "63", url: "https://drive.google.com/uc?export=view&id=11cQxqcy8TPLkjLFXGs_2v6SV2zV-v2Sg", caption: "" },
      { id: "64", url: "https://drive.google.com/uc?export=view&id=1HQR27C3eYyjgJ53kHf9FJnQGTtdBzJOc", caption: "" },
      { id: "65", url: "https://drive.google.com/uc?export=view&id=1psR9tO99EpAnqcJanoapRf372HDOFE3g", caption: "" },
      { id: "66", url: "https://drive.google.com/uc?export=view&id=1RffLY49PiCK6cQDeEaA4c8hVTT653Xqz", caption: "" },
      { id: "67", url: "https://drive.google.com/uc?export=view&id=1_Ih5ixLOPGO9LV9I1Xi3peAphVjOPYfc", caption: "" },
      { id: "68", url: "https://drive.google.com/uc?export=view&id=1A3g7erElkLY48TzCZm8QgevI2JiitHB8", caption: "" },
      { id: "69", url: "https://drive.google.com/uc?export=view&id=1C425D1mTTscKfd0ngXYX7NT6s1bF0kqP", caption: "" },
      { id: "70", url: "https://drive.google.com/uc?export=view&id=1diLZLOcKRbl0O-bsFDk1YYYXyZV--yq8", caption: "" },
      { id: "71", url: "https://drive.google.com/uc?export=view&id=1872LhvfP9ZjLbq3Hs2UxVMFJVwMzogRZ", caption: "" },
      { id: "72", url: "https://drive.google.com/uc?export=view&id=1sEUf9r-WChfhbhloOWHKRFcWQH8GmD7u", caption: "" },
      { id: "73", url: "https://drive.google.com/uc?export=view&id=1nALSmarrWjXnuk3T6gyabS7U-8mQ7Tfq", caption: "" },
      { id: "74", url: "https://drive.google.com/uc?export=view&id=1omwgN3S2m85XpujukopkjHgD7yZNHX2t", caption: "" },
      { id: "75", url: "https://drive.google.com/uc?export=view&id=1fqbpfKbCcHN1cNlIumZ5fKo7CVm00-kK", caption: "" },
      { id: "76", url: "https://drive.google.com/uc?export=view&id=1pkspfTxFiAC_6w3hPd2YihZsEmPnyi3A", caption: "" },
      { id: "77", url: "https://drive.google.com/uc?export=view&id=1lVrHj21r8wMZfq8gb15GopWV1q_pks80", caption: "" },
      { id: "78", url: "https://drive.google.com/uc?export=view&id=1_IMOOVqZFyK-XkQM3AtG6jp8-RokHQqt", caption: "" },
      { id: "79", url: "https://drive.google.com/uc?export=view&id=1M0Z0oZkycrhE6IfbPCsDZrW3hdjZsOHG", caption: "" },
      { id: "80", url: "https://drive.google.com/uc?export=view&id=1cJh5VOqRoZGuOsOaC22ODKJXW_j-XxwU", caption: "" },
      { id: "81", url: "https://drive.google.com/uc?export=view&id=1ai-Q5K3YG3h7iSiSP60MYA4A8k-S6ilq", caption: "" },
      { id: "82", url: "https://drive.google.com/uc?export=view&id=1NalxT2H2iMw3UOStSBRFf8OLHIC1cahN", caption: "" },
      { id: "83", url: "https://drive.google.com/uc?export=view&id=1AjntcPtYX0NwYtqLleCOb9JTFWSQLotd", caption: "" },
      { id: "84", url: "https://drive.google.com/uc?export=view&id=1QSkqxQPXldBdjZziTyqeK-XcPRhPJka3", caption: "" },
      { id: "85", url: "https://drive.google.com/uc?export=view&id=1DgReNkB-DZLWWSucAblsBc9c7iD7uu_y", caption: "" },
      { id: "86", url: "https://drive.google.com/uc?export=view&id=1NPoNrecRC7fRXmTelcSCx-IeFInN7Z9D", caption: "" },
      { id: "87", url: "https://drive.google.com/uc?export=view&id=1h-SRZusi1MDoNG1wgdXASGmeGn1AnM4n", caption: "" },
      { id: "88", url: "https://drive.google.com/uc?export=view&id=1F3mJtMLrAuulgziSr60gtUB2qtCJRAFY", caption: "" },
      { id: "89", url: "https://drive.google.com/uc?export=view&id=1LOHOfCqb3gpiCFYM0pDz3hOIg1-Imhxy", caption: "" },
      { id: "90", url: "https://drive.google.com/uc?export=view&id=1RDdZqW26IXjRvv73gNAQ3AM7fxzHi2p4", caption: "" },
      { id: "91", url: "https://drive.google.com/uc?export=view&id=1eN14AmWuhpYqLYFf29AOsgAdUbUqwz5n", caption: "" },
      { id: "92", url: "https://drive.google.com/uc?export=view&id=1YYm5T2nCYH_zsdyKXOR8jklS4_fVptcj", caption: "" },
      { id: "93", url: "https://drive.google.com/uc?export=view&id=1YmWaxdOjmKSKE-xsCt0He-e-RAbzRs2t", caption: "" },
      { id: "94", url: "https://drive.google.com/uc?export=view&id=15qBqWMZTIS4Gfi50tu62QuJeuOo7W0AD", caption: "" },
      { id: "95", url: "https://drive.google.com/uc?export=view&id=12GLBDZIm5maB_kdrriXyPP-8JZfPLtQI", caption: "" },
      { id: "96", url: "https://drive.google.com/uc?export=view&id=1EuZGm_5Kb-tpQRAaeJGbds8_3rr9y_jG", caption: "" },
      { id: "97", url: "https://drive.google.com/uc?export=view&id=1GyXuE8Minua0hHFSoCKePJtt4vxVrzDg", caption: "" },
      { id: "98", url: "https://drive.google.com/uc?export=view&id=1PkkWlq7tL2PAxklAXNPmS_M-usRZtd6T", caption: "" },
      { id: "99", url: "https://drive.google.com/uc?export=view&id=1OAj8K7h2vn19uaWU4PE36qGYBPMNt8tK", caption: "" },
      { id: "100", url: "https://drive.google.com/uc?export=view&id=1bPtvIT9o_ST_KLJR5IKm2im0dGB64au4", caption: "" },
      { id: "101", url: "https://drive.google.com/uc?export=view&id=1YJHPeHvpwF3TATGa6rww5IMJAR1M5WQ3", caption: "" },
      { id: "102", url: "https://drive.google.com/uc?export=view&id=14EVj02OEj9GKMv2GsDzf8SYxGJHDpLLZ", caption: "" },
      { id: "103", url: "https://drive.google.com/uc?export=view&id=1kmTpOi113M0xn6di1zFKGH51FGecTNdm", caption: "" },
      { id: "104", url: "https://drive.google.com/uc?export=view&id=1mrN20oLUxqiJfF7jV9sUWgw9kfjJvM04", caption: "" },
      { id: "105", url: "https://drive.google.com/uc?export=view&id=18XacQx4LGVE8BofUNFNdfOsbGWBRb3y1", caption: "" },
      { id: "106", url: "https://drive.google.com/uc?export=view&id=1GCQzUC1104r6UTxjs8sdh8iK0UntvPMv", caption: "" },
      { id: "107", url: "https://drive.google.com/uc?export=view&id=1AaQL84ccIg5PvLdFMZaN5fWEhpOGOfCs", caption: "" },
      { id: "108", url: "https://drive.google.com/uc?export=view&id=12YIIBUQatQzGiBkGyPo9Of-x3YMXUDq0", caption: "" },
      { id: "109", url: "https://drive.google.com/uc?export=view&id=1Q6J9dw0I1K-ym9uCvvf5NRomrCuKXq_Y", caption: "" },
      { id: "110", url: "https://drive.google.com/uc?export=view&id=1oUCBdL5H6l0iwzwSW5GnuY933DLJyfnn", caption: "" },
      { id: "111", url: "https://drive.google.com/uc?export=view&id=1eIX7oXvjTV1lKLa2Ax80fSV6FzO4Yqeq", caption: "" },
      { id: "112", url: "https://drive.google.com/uc?export=view&id=1od76Fy0v-Jhb_vF0fYLFVqhfYZlqIoQY", caption: "" },
      { id: "113", url: "https://drive.google.com/uc?export=view&id=13nuKZ97V-STNGwBLxyIlBolOplqxi--N", caption: "" },
      { id: "114", url: "https://drive.google.com/uc?export=view&id=1wI7Niuk2dZsCszAkQ5U9fgdLlmHZY371", caption: "" },
      { id: "115", url: "https://drive.google.com/uc?export=view&id=1_s3ZgpZ1eVNEoxR-eDpYTMxxYIYCtA-P", caption: "" },
      { id: "116", url: "https://drive.google.com/uc?export=view&id=1Gwh8NcQCJI5mTn_fGTBV5ffzQ7Gajl12", caption: "" },
      { id: "117", url: "https://drive.google.com/uc?export=view&id=1T1K22bYDe3TIARF0pzjlCXquZAMJ6kYg", caption: "" },
      { id: "118", url: "https://drive.google.com/uc?export=view&id=1hhGknDD-zIVWFC7y65vYFcOzs8yNbKRB", caption: "" },
      { id: "119", url: "https://drive.google.com/uc?export=view&id=1KJ-yH0dDb3mS0sirjtacO81R_6wRNmwW", caption: "" },
      { id: "120", url: "https://drive.google.com/uc?export=view&id=1x3bZuAHBXGtJPy-Gk4K7HISlqBIgg1tb", caption: "" },
      { id: "121", url: "https://drive.google.com/uc?export=view&id=1ZlCUQKV1_K2auED9oyRWM3NwpIl1ryeQ", caption: "" },
      { id: "122", url: "https://drive.google.com/uc?export=view&id=1KC2H0rwX8SK-D2EI9tiTwTTlE84daWIS", caption: "" },
      { id: "123", url: "https://drive.google.com/uc?export=view&id=1Fh9FJURN3gH7t1j2nQJDn3q5Q3z0jM-r", caption: "" },
      { id: "124", url: "https://drive.google.com/uc?export=view&id=1Lq3gkxuMYZ-JK-0CmkcGPqFus9BGZnye", caption: "" },
      { id: "125", url: "https://drive.google.com/uc?export=view&id=1JCzS4sGa2n6f5Mkm2Uy2ci8hdTBNs08Y", caption: "" },
      { id: "126", url: "https://drive.google.com/uc?export=view&id=1R9HvhYrixclOCa-1y5WM_8tT-NxcUmrF", caption: "" },
      { id: "127", url: "https://drive.google.com/uc?export=view&id=1DdOvkpqNr8EWc1cbtDkh7rekMrRz3ssc", caption: "" },
      { id: "128", url: "https://drive.google.com/uc?export=view&id=1CkWXgUh9wO_AAowkGa91pHt2TsGzwZNv", caption: "" },
      { id: "129", url: "https://drive.google.com/uc?export=view&id=1uAJAxEZHfE3ghEMIGleiMOoSES5BsWMg", caption: "" },
      { id: "130", url: "https://drive.google.com/uc?export=view&id=1CMAyWH16G0jYHQ54m9V_5jX-RM4WUuEg", caption: "" },
      { id: "131", url: "https://drive.google.com/uc?export=view&id=1Yt3uotC2EdXIQTlGjvUmCRCv-nT4U8bx", caption: "" },
      { id: "132", url: "https://drive.google.com/uc?export=view&id=1qNnPA4Ty7-z6z-5ZS8NR1HCy1qNj07wg", caption: "" },
      { id: "133", url: "https://drive.google.com/uc?export=view&id=1JDcJnF6B69SnQ5EZgS91xdvV2ITfXGYz", caption: "" },
      { id: "134", url: "https://drive.google.com/uc?export=view&id=1erWSGE_6Kobvpu0Co-0Hrhekv7H3priH", caption: "" },
      { id: "135", url: "https://drive.google.com/uc?export=view&id=1r9Df2KyGhew4h8VZJa-HoTGsXzhSNOHD", caption: "" },
      { id: "136", url: "https://drive.google.com/uc?export=view&id=1zjt7n3XgI_nPSOVodILu0KtTXJxoA42B", caption: "" },
      { id: "137", url: "https://drive.google.com/uc?export=view&id=1OVmctpW23eNb3ka6cwNJS-0ldYpyWYUD", caption: "" },
      { id: "138", url: "https://drive.google.com/uc?export=view&id=1x72waMzIfRQ_fV8Iy-ORNfQD6QjPjVNg", caption: "" },
      { id: "139", url: "https://drive.google.com/uc?export=view&id=1kwSETL5lcGiY9s2eLTvGFS1NBJtlUEuQ", caption: "" },
      { id: "140", url: "https://drive.google.com/uc?export=view&id=1T0ksZhGwyWvbwkCtDob7jybeAYpx3TvU", caption: "" },
      { id: "141", url: "https://drive.google.com/uc?export=view&id=1224UUcPXux81VsMreev0ukayGZoBuR3Y", caption: "" },
      { id: "142", url: "https://drive.google.com/uc?export=view&id=14W4H3YkMP14YoVWW5JFCt6i0oyazrAON", caption: "" },
      { id: "143", url: "https://drive.google.com/uc?export=view&id=1UtrNcZhkjMonTrjIyxaaOuijJbqLw1zW", caption: "" },
      { id: "144", url: "https://drive.google.com/uc?export=view&id=1JGKYVGQ1W8yA_hcPkSE6-QfYD3PKzYEi", caption: "" },
      { id: "145", url: "https://drive.google.com/uc?export=view&id=1l4GbLlrCTgw-2Ix2dF8eNqia0L0a5417", caption: "" },
      { id: "146", url: "https://drive.google.com/uc?export=view&id=13WPYUyDQXr42dESaezvEjC6bKb8VbRv_", caption: "" },
      { id: "147", url: "https://drive.google.com/uc?export=view&id=1fxkMLt0xMgcVnhoqcWMKeQ02GVwVHjX9", caption: "" },
      { id: "148", url: "https://drive.google.com/uc?export=view&id=1xqf0NNiZ_kVz-ObdUw0YmR9VCTJnqTtU", caption: "" },
      { id: "149", url: "https://drive.google.com/uc?export=view&id=1u-TsmfB-uqkmJRcmOGCnsq4yqGK4VKh9", caption: "" },
      { id: "150", url: "https://drive.google.com/uc?export=view&id=18atwUVSE-_BuZKmD9JeUSLTeOKMEMXpl", caption: "" },
      { id: "151", url: "https://drive.google.com/uc?export=view&id=1Hs75p420leglqOZyunCDWKtUgZF9432Z", caption: "" },
      { id: "152", url: "https://drive.google.com/uc?export=view&id=1NhllXY6MNb0dv3dTJkIy-hpCRuLXiakZ", caption: "" },
      { id: "153", url: "https://drive.google.com/uc?export=view&id=1Yd3xOhe6oqVYLwwMFIIyLo2V2Y3N0U7Z", caption: "" },
      { id: "154", url: "https://drive.google.com/uc?export=view&id=1XxcF28QDBFD5MCyIUR0XIvy-xlgHSokH", caption: "" },
      { id: "155", url: "https://drive.google.com/uc?export=view&id=1sVgGEBfAqcIivJtBFxxshkqZU1y5QoiW", caption: "" },
      { id: "156", url: "https://drive.google.com/uc?export=view&id=1RzJvQB4miOSfkEx2o7cMa-xHIpmIdrtN", caption: "" },
      { id: "157", url: "https://drive.google.com/uc?export=view&id=1OT8MbtXalRd3lnAmrCGwGLG4cEZ6Baka", caption: "" },
      { id: "158", url: "https://drive.google.com/uc?export=view&id=12khUvw84KojUJmu43MKAiwMlfJyg2EIL", caption: "" },
      { id: "159", url: "https://drive.google.com/uc?export=view&id=1vRsSpHdO1orj8YQS0isyfnnA5se5Nmq1", caption: "" },
      { id: "160", url: "https://drive.google.com/uc?export=view&id=18ZfH623RwtK8HqlJdJMFZ_8nJe7VCFz6", caption: "" },
      { id: "161", url: "https://drive.google.com/uc?export=view&id=1VSFAS86G_oTe63fWGGeVZF729PVYfNnZ", caption: "" },
      { id: "162", url: "https://drive.google.com/uc?export=view&id=1eSSO7JeKVeWsoCHlOlqs7ZQBFVGjhGWH", caption: "" },
      { id: "163", url: "https://drive.google.com/uc?export=view&id=1B0E-GqGmU6DoqtU1SZwYwqz5HlGN5BX8", caption: "" },
      { id: "164", url: "https://drive.google.com/uc?export=view&id=1kft8Jm9DQ1fd3y1YwPQjhsZJqnp71Bfl", caption: "" },
      { id: "165", url: "https://drive.google.com/uc?export=view&id=1YvtSc5Q9cdk3BaJ02J99UvZeStQFE48A", caption: "" },
      { id: "166", url: "https://drive.google.com/uc?export=view&id=1v50EUXM0wCtKd4GPqIkds2CUvfyruOwP", caption: "" },
      { id: "167", url: "https://drive.google.com/uc?export=view&id=1WpoeY2ZAs1m5i9G378ifpiYdO2ZFxjsG", caption: "" },
      { id: "168", url: "https://drive.google.com/uc?export=view&id=1PDF6JvGhCGM3kmY36duiPL_KgOnIelEy", caption: "" },
      { id: "169", url: "https://drive.google.com/uc?export=view&id=1VAeic80Y0hYEqUN9tAhxqsOvQYX3HbG0", caption: "" },
      { id: "170", url: "https://drive.google.com/uc?export=view&id=1qArLOo2ZxYcQxn1T7LngZKtcKzyboPV6", caption: "" },
      { id: "171", url: "https://drive.google.com/uc?export=view&id=15PApT6dIg_Zot-HUjXeWWkMeDBzS3qcy", caption: "" },
      { id: "172", url: "https://drive.google.com/uc?export=view&id=1GA-24Np5YSkaZQnUt3FoJyYeA1z6-uZx", caption: "" },
      { id: "173", url: "https://drive.google.com/uc?export=view&id=1XXPQqcbrPrlm5QfboG32JD3D_MUvV_iN", caption: "" },
      { id: "174", url: "https://drive.google.com/uc?export=view&id=1aSA0Zo-zsEpa5z-K33G7dlVCPx09TLGY", caption: "" },
      { id: "175", url: "https://drive.google.com/uc?export=view&id=1jVA1SDnBImIQtPOUG1fgh_xDzClqefY4", caption: "" },
      { id: "176", url: "https://drive.google.com/uc?export=view&id=15oWeiqMnQ79-K7dKxEqa4BkyGdzRFSCG", caption: "" },
      { id: "177", url: "https://drive.google.com/uc?export=view&id=1jQbUc80D9hzqABVWFWCSzMWaKXrljqe7", caption: "" },
      { id: "178", url: "https://drive.google.com/uc?export=view&id=18C42DusrgXlw2rkCX8MSmVp58OBRYe0d", caption: "" },
      { id: "179", url: "https://drive.google.com/uc?export=view&id=185NmVPv2dZYGL3VIGakge5cIcGGNwTYd", caption: "" },
      { id: "180", url: "https://drive.google.com/uc?export=view&id=1lV9zfPk0tLwGdE_tXdAM7004ZD0i24d7", caption: "" },
      { id: "181", url: "https://drive.google.com/uc?export=view&id=16L3mgA1-yB_Y1jx-lHAyBuPJTh-ww4ep", caption: "" },
      { id: "182", url: "https://drive.google.com/uc?export=view&id=1iBaSNZ4jQ7mhSOQB4ZNVkHzjZKWMkQeh", caption: "" },
      { id: "183", url: "https://drive.google.com/uc?export=view&id=1jJJmc1z4NPPuY8-xmhLdOqKHwL3CUXMy", caption: "" },
      { id: "184", url: "https://drive.google.com/uc?export=view&id=1EjNZnB-DD9smVAzz0kIEX9UTUkiTy0Qf", caption: "" },
      { id: "185", url: "https://drive.google.com/uc?export=view&id=11TfIpEvCZugSiBJHRJv9a8SwkpupJPWA", caption: "" },
      { id: "186", url: "https://drive.google.com/uc?export=view&id=1ht7vSUA9sFo9xqPAq3NBUq6D_zrLUnTo", caption: "" },
      { id: "187", url: "https://drive.google.com/uc?export=view&id=1lUxFawsZ-GTSeAl3mU2-xbxnVBkpwWON", caption: "" },
      { id: "188", url: "https://drive.google.com/uc?export=view&id=1CiN0Coii0oJA7I4czV5j-b80NFZuTS8h", caption: "" },
      { id: "189", url: "https://drive.google.com/uc?export=view&id=1T2qxyxOp291OEGxB5-i_pkWWEKEP9NYp", caption: "" },
      { id: "190", url: "https://drive.google.com/uc?export=view&id=1AGpUaeOKhFQZu4CYyvhcI3fS5Oh88dLB", caption: "" },
      { id: "191", url: "https://drive.google.com/uc?export=view&id=1ov3Hp4t7O1x-m0sdwp5wxspTMGkRJvXi", caption: "" },
      { id: "192", url: "https://drive.google.com/uc?export=view&id=1mwku6VCMMJGYEIoAinXSr9YISMgNhzF-", caption: "" },
      { id: "193", url: "https://drive.google.com/uc?export=view&id=16-66WpSVCe9mIfVUqG1ivBCha_X-1-_0", caption: "" },
      { id: "194", url: "https://drive.google.com/uc?export=view&id=19UmfWjSsJf1OzxtDnnUWbXhPDIVEIRo6", caption: "" },
      { id: "195", url: "https://drive.google.com/uc?export=view&id=1UC0t4Wgi1DKKynk4qLdll0gMaAuP9RKK", caption: "" },
      { id: "196", url: "https://drive.google.com/uc?export=view&id=1A5APx80XKBnXK_pNMHb8VQcp9o4BVmIW", caption: "" },
      { id: "197", url: "https://drive.google.com/uc?export=view&id=1oOpgSJbv-0HviTaDrg7Nv7AxDnyYQkPQ", caption: "" },
      { id: "198", url: "https://drive.google.com/uc?export=view&id=1VOdzRaXM-faEd2e9gOUv9KPyeC5VI7M-", caption: "" },
      { id: "199", url: "https://drive.google.com/uc?export=view&id=10kpelFY8DTrwEnf53qzFdgclJfUaYJgH", caption: "" },
      { id: "200", url: "https://drive.google.com/uc?export=view&id=1gmx9Oi7UMj7L6DXc90mA31EcOEApfB_l", caption: "" },
      { id: "201", url: "https://drive.google.com/uc?export=view&id=12xTeUeZ9IFUGdQkvUlJILNqraLz4QECw", caption: "" },
      { id: "202", url: "https://drive.google.com/uc?export=view&id=1DcWsSRVd1GvMZ7FoNYTgTVuXYGrdxNx9", caption: "" },
      { id: "203", url: "https://drive.google.com/uc?export=view&id=1pel4iwlVmIMadXx6q_15njRR1LW2F7Bw", caption: "" },
      { id: "204", url: "https://drive.google.com/uc?export=view&id=1CPgTDPup9cW9wjVjS3QI8t3BEeNEX7kC", caption: "" },
      { id: "205", url: "https://drive.google.com/uc?export=view&id=1qOPnVdAeaMDj62KnG0gvNVuhDNoLxQWl", caption: "" },
      { id: "206", url: "https://drive.google.com/uc?export=view&id=1zTMnvq4LkJ_2Eb2IprcaHIGcXjegXOv9", caption: "" },
      { id: "207", url: "https://drive.google.com/uc?export=view&id=1uB_DxvhM1JTi6CnG8JHusuHwtTPfgREO", caption: "" },
      { id: "208", url: "https://drive.google.com/uc?export=view&id=165yT7PMSGymlpMV-Ft49dxNLwW5o6CLw", caption: "" },
      { id: "209", url: "https://drive.google.com/uc?export=view&id=1eibkUjMdtNjugGA1nrFKx3roiOFK4Hgn", caption: "" },
      { id: "210", url: "https://drive.google.com/uc?export=view&id=1iqfEMr7JZDkyUk1-BpnzRITLsDrOhs4k", caption: "" },
      { id: "211", url: "https://drive.google.com/uc?export=view&id=1CnbPISY8kvpRFolQY4X8LWT9lR13sUHV", caption: "" },
      { id: "212", url: "https://drive.google.com/uc?export=view&id=14BYRWwps3smbliOuIaANSAF1w3T4Vr4l", caption: "" },
      { id: "213", url: "https://drive.google.com/uc?export=view&id=1uMUIStBUEp-rS6pZ7ddze4dU12-NJPC4", caption: "" },
      { id: "214", url: "https://drive.google.com/uc?export=view&id=1PCTOTxBMmgOJhNNEVgfg6HyQ0lIhpGOt", caption: "" },
      { id: "215", url: "https://drive.google.com/uc?export=view&id=1RRnlyKCYL7z5OYT5pse6zrKLffPxfurh", caption: "" },
      { id: "216", url: "https://drive.google.com/uc?export=view&id=1mTArs2s_o2Cgkco2Y2b3nTYSxbb-B65W", caption: "" },
      { id: "217", url: "https://drive.google.com/uc?export=view&id=1jcGJuLKMyXOKKoLAsf2urE9IF1MI6oKU", caption: "" },
      { id: "218", url: "https://drive.google.com/uc?export=view&id=1iMwR5bMjB6wWrJEtOgCdxfxuDXyWCDIb", caption: "" },
      { id: "219", url: "https://drive.google.com/uc?export=view&id=1QqggdGhxHQz-NrGnUZvG1BXt--jTtMNH", caption: "" },
      { id: "220", url: "https://drive.google.com/uc?export=view&id=16kstzfy4R8OuG6JCURFjuX7qiJk2xICl", caption: "" },
      { id: "221", url: "https://drive.google.com/uc?export=view&id=1HaknyUxVO-dwIxFLaFu6x7rIf90eOBHX", caption: "" },
      { id: "222", url: "https://drive.google.com/uc?export=view&id=12ELffAUKT5LlmRRhUPxhgSIP9gJdT5Ih", caption: "" },
      { id: "223", url: "https://drive.google.com/uc?export=view&id=15BWPaQLNLbuTuFj8GJWmEsKsS81d6lHY", caption: "" },
      { id: "224", url: "https://drive.google.com/uc?export=view&id=1kMvqVu5Ttmza-c5daEwu0JiGqKu3Jt6I", caption: "" },
      { id: "225", url: "https://drive.google.com/uc?export=view&id=1ot3bYUBYUq90Rfh4gTG7ew8NOrJ8WA_b", caption: "" },
      { id: "226", url: "https://drive.google.com/uc?export=view&id=1mapZFfsKyxrkXGgFt-C33NrAfWi7DtUp", caption: "" },
      { id: "227", url: "https://drive.google.com/uc?export=view&id=15to6lMrk3c0Ri1pZWQ7G4r4c4En00JxW", caption: "" },
      { id: "228", url: "https://drive.google.com/uc?export=view&id=1myYE6VgyjZSgjBPp7x5DIBSaPgmeqOm9", caption: "" },
      { id: "229", url: "https://drive.google.com/uc?export=view&id=1K9NBirm5ojPahkajHSYjyVBwQngrM0Hu", caption: "" },
      { id: "230", url: "https://drive.google.com/uc?export=view&id=1bqYS9NS6CgJXbs59YfLZzT3zn2jQ-3iU", caption: "" },
      { id: "231", url: "https://drive.google.com/uc?export=view&id=18DPGkef6MaGFYs8kNcgo7ar_04mGiFub", caption: "" },
      { id: "232", url: "https://drive.google.com/uc?export=view&id=1Yp5agitnl7qwVmJ-6lmsFEBA__hezp4G", caption: "" },
      { id: "233", url: "https://drive.google.com/uc?export=view&id=1BetYUvk2TDWHuQKYkGNqf4VnRJGrffTY", caption: "" },
      { id: "234", url: "https://drive.google.com/uc?export=view&id=1Gddmi66AepbWakakRN3V-WhwzusgOirG", caption: "" },
      { id: "235", url: "https://drive.google.com/uc?export=view&id=11ykwKXLmGkIL_4Ief1qMt6DPzYvdpUXw", caption: "" },
      { id: "236", url: "https://drive.google.com/uc?export=view&id=1hAS9ywP8w4-D7KV-FgLUK9Pt7BqcbqgC", caption: "" },
      { id: "237", url: "https://drive.google.com/uc?export=view&id=15kff2e9PVV6CqGOkKGFmRv1yp_Eus2CQ", caption: "" },
      { id: "238", url: "https://drive.google.com/uc?export=view&id=1mVKJ_VAouAetZxUHy8a3CsUoOIart6QA", caption: "" },
      { id: "239", url: "https://drive.google.com/uc?export=view&id=1LRabp72bSynwovl4SUv3XiwMtRlwSEAK", caption: "" },
      { id: "240", url: "https://drive.google.com/uc?export=view&id=1Fxst5yUuRNRW20kohBrs6gMVBa1_FRyK", caption: "" },
      { id: "241", url: "https://drive.google.com/uc?export=view&id=1O2iL_Flh37g_djSyobeGsbavzFBh6t9X", caption: "" },
      { id: "242", url: "https://drive.google.com/uc?export=view&id=128GgrdTK3SadB8m6yduduIAfVpAfpRlZ", caption: "" },
      { id: "243", url: "https://drive.google.com/uc?export=view&id=1GBZcw5HqPo7BIk3ijqBsH2js_PuxwYKh", caption: "" },
      { id: "244", url: "https://drive.google.com/uc?export=view&id=1crVDvB76a_hOz0qwRbFYQyAwupoAokDp", caption: "" },
      { id: "245", url: "https://drive.google.com/uc?export=view&id=1-ToSaXSisLvSQZM4X9TdRQVzhsZ5XWCL", caption: "" },
      { id: "246", url: "https://drive.google.com/uc?export=view&id=1piZ221AgYpyjmsNGeiD815sgFqU-LeJA", caption: "" },
      { id: "247", url: "https://drive.google.com/uc?export=view&id=1AFG7GJqK1vIOzwz0L12m2ABzM1DBKMST", caption: "" },
      { id: "248", url: "https://drive.google.com/uc?export=view&id=144RJyvg8PyLci1Fi-QJIQKuyDVeplBwz", caption: "" },
      { id: "249", url: "https://drive.google.com/uc?export=view&id=1ANCf4m9Fh88D3AHtLG1NTDyKOpJYQKlV", caption: "" },
      { id: "250", url: "https://drive.google.com/uc?export=view&id=1zV_vaM_nJG1YhdgHHjxT1muf7syQoemW", caption: "" },
      { id: "251", url: "https://drive.google.com/uc?export=view&id=1em7yGrHpG8p19bDBbrX01LcnahdstWFj", caption: "" },
      { id: "252", url: "https://drive.google.com/uc?export=view&id=13Fdzw1slDvOdb07M7nZkrwMCoAcdR8yI", caption: "" },
      { id: "253", url: "https://drive.google.com/uc?export=view&id=1tb5FofsyJ-CgE4mhu_Lj7OO1E6uPHE1B", caption: "" },
      { id: "254", url: "https://drive.google.com/uc?export=view&id=1Tom_kUoBlsp1HwSGveNgzWD0ez5ALZBH", caption: "" },
      { id: "255", url: "https://drive.google.com/uc?export=view&id=1QQ_nslUE8n48iA_qMQYAlu5i6K96fiDs", caption: "" },
      { id: "256", url: "https://drive.google.com/uc?export=view&id=1zdW9NMFVJq-FJQcJ1t04MR9v_TuhhZbH", caption: "" },
      { id: "257", url: "https://drive.google.com/uc?export=view&id=14aXVFnopuMA_lrAhK4yIpe1uFFKinv2d", caption: "" },
      { id: "258", url: "https://drive.google.com/uc?export=view&id=1BMyXAhV4gwlN1D4cU5YEuFtJibguHnjW", caption: "" },
      { id: "259", url: "https://drive.google.com/uc?export=view&id=1SbnqgXPBDFcYmQrrEYB9C_khw_Xrgw6-", caption: "" },
      { id: "260", url: "https://drive.google.com/uc?export=view&id=1YMAwJ9CsRiacvYKr0sTsgAZA2rRXU-Nn", caption: "" },
      { id: "261", url: "https://drive.google.com/uc?export=view&id=1rWBg2WTTFtNGcftgiBfoDHO8GMEobNZz", caption: "" },
      { id: "262", url: "https://drive.google.com/uc?export=view&id=1edRXE1dikLhfHYvoLnaunvjozFLiebn6", caption: "" },
      { id: "263", url: "https://drive.google.com/uc?export=view&id=1-EVqhkY4VVJIO91agbCWKw7Xlk-hNkEW", caption: "" },
      { id: "264", url: "https://drive.google.com/uc?export=view&id=1AH0pBffCyeldy235lzrFfTBmQwJ02P6K", caption: "" },
      { id: "265", url: "https://drive.google.com/uc?export=view&id=1Qrd_F0_6P0RNvmgOnmN1EueD0JXOt9qJ", caption: "" },
      { id: "266", url: "https://drive.google.com/uc?export=view&id=168vKNQTmoRQoo_pBGK2ahM4NjCfLcBkC", caption: "" },
      { id: "267", url: "https://drive.google.com/uc?export=view&id=1ybX7-_LdWKczj405VLVF3mxKU86NkGY_", caption: "" },
      { id: "268", url: "https://drive.google.com/uc?export=view&id=19cOuK7nT4PnMzfyF0ANYqTNeyA9NhD53", caption: "" },
      { id: "269", url: "https://drive.google.com/uc?export=view&id=1hbMPaeu2tX3HjqXIGllMsvhPhJHTSZ02", caption: "" },
      { id: "270", url: "https://drive.google.com/uc?export=view&id=1cvnTjJ4K3gnPAVdjfQ4gEu1EVjgVLzeL", caption: "" },
      { id: "271", url: "https://drive.google.com/uc?export=view&id=1_-B3PzDVrst15wwJsnkZyi76kaViJkgp", caption: "" },
      { id: "272", url: "https://drive.google.com/uc?export=view&id=1LA6HNFNTaJZws8CgTRvSm4h_JLEljMX3", caption: "" },
      { id: "273", url: "https://drive.google.com/uc?export=view&id=1ZrUNEYmn-SVaEVsgaM9v45xUJpclQTCx", caption: "" },
      { id: "274", url: "https://drive.google.com/uc?export=view&id=1gE2pZolbeTvBFD358hi9jfGXIsaDc8qL", caption: "" },
      { id: "275", url: "https://drive.google.com/uc?export=view&id=11iw2GA3n_hDtRdX4W1TXaXx0L1Q0SGxO", caption: "" },
      { id: "276", url: "https://drive.google.com/uc?export=view&id=1lzUgAJk24e7Cx_OTXukjSTWBPYuFBusD", caption: "" },
      { id: "277", url: "https://drive.google.com/uc?export=view&id=1zeBXRL_mDENzYSuiig6CRGd_iyz69YBR", caption: "" },
      { id: "278", url: "https://drive.google.com/uc?export=view&id=1Jb7shPQmhmJ-0-VgM3yTkRLonyt3UZbL", caption: "" },
      { id: "279", url: "https://drive.google.com/uc?export=view&id=1zX8slUZlYXU5atqNcjn15k2imBWqAsrL", caption: "" },
      { id: "280", url: "https://drive.google.com/uc?export=view&id=1ugxkvMNxrr-9nRtArLozfs2AjFKpEo4S", caption: "" },
      { id: "281", url: "https://drive.google.com/uc?export=view&id=1SnkRFMDCOB8bt2l5p-rmIDh9kiW9L66P", caption: "" },
      { id: "282", url: "https://drive.google.com/uc?export=view&id=10xSEDZDsmw3-L4tMDY7e9J1sz9E2rPLx", caption: "" },
      { id: "283", url: "https://drive.google.com/uc?export=view&id=1qkbSEgEwCvAPEvh2ylZ8YJb83k-4PZzs", caption: "" },
      { id: "284", url: "https://drive.google.com/uc?export=view&id=1H_pAnN520KnOFi-OuESXDeFUOj-rXlz_", caption: "" },
      { id: "285", url: "https://drive.google.com/uc?export=view&id=11iJTMoehN3wFpI35DS-7D0n_eShgRkkV", caption: "" },
      { id: "286", url: "https://drive.google.com/uc?export=view&id=1vEVHQ2bDtFe23uyJNYiBbD-EjoQUbCDV", caption: "" },
      { id: "287", url: "https://drive.google.com/uc?export=view&id=1ix27Uk0J9fmE8NFJ1wOckq5v52pWdkTk", caption: "" },
      { id: "288", url: "https://drive.google.com/uc?export=view&id=1n2eUA9p9RvMbTvrtXXxqYMv3i3Dnr2lc", caption: "" },
      { id: "289", url: "https://drive.google.com/uc?export=view&id=1dCXap3YTyMU2Ws-397TA9RCagCBVFIhh", caption: "" },
      { id: "290", url: "https://drive.google.com/uc?export=view&id=1TgJrB8dp1muxOzGlFCbggIYHuFOCNZub", caption: "" },
      { id: "291", url: "https://drive.google.com/uc?export=view&id=1coX6x0P0etzPZqZFiN_rzHTy-_-P3kEZ", caption: "" },
      { id: "292", url: "https://drive.google.com/uc?export=view&id=1XBal_5qoQV2dSJlXAd0nt6YCgFP8RS-_", caption: "" },
      { id: "293", url: "https://drive.google.com/uc?export=view&id=1DotXTy0RGVdreEfuFQG21KojNBGeSj0-", caption: "" },
      { id: "294", url: "https://drive.google.com/uc?export=view&id=1QvJi-UFiWzKqT0GAHJZpk92FrMW4E4EP", caption: "" },
      { id: "295", url: "https://drive.google.com/uc?export=view&id=1F_30o4aU5o0FkE4lvlkJnm2L3J24XUHp", caption: "" },
      { id: "296", url: "https://drive.google.com/uc?export=view&id=1C7Wlf-9F3iPHnOPDCZxcxUBRG4pvWnuF", caption: "" },
      { id: "297", url: "https://drive.google.com/uc?export=view&id=1OwpNqOchJpkMfoBRXq4yzUkPQPg_6hyg", caption: "" },
      { id: "298", url: "https://drive.google.com/uc?export=view&id=1boqYS7xYw2iBwMRP-C61c85gP83VDRm-", caption: "" },
      { id: "299", url: "https://drive.google.com/uc?export=view&id=1g4I3RLcb252ffLeirQ87DVhfboFQWD47", caption: "" },
      { id: "300", url: "https://drive.google.com/uc?export=view&id=1GCCQh2wfE2ykLsBI7ePskOcZM3deGu4c", caption: "" },
      { id: "301", url: "https://drive.google.com/uc?export=view&id=1QTHv2y7jK5uBwPHvYoK2yHPEwrZK15r4", caption: "" },
      { id: "302", url: "https://drive.google.com/uc?export=view&id=1t3xYgpqAXMOk7sdojOLDtHk_7Xag5tr7", caption: "" },
      { id: "303", url: "https://drive.google.com/uc?export=view&id=1T_3X9Zyt8vpb6u1JO1oSnTC3H3cVR7ZW", caption: "" },
      { id: "304", url: "https://drive.google.com/uc?export=view&id=1_pKLlDBsOv0Gj4m2qas2cdcZFN-awCdg", caption: "" },
      { id: "305", url: "https://drive.google.com/uc?export=view&id=1MbiiooMvBgZKwRxxZ3Jan6xhX_-3v0Ff", caption: "" },
      { id: "306", url: "https://drive.google.com/uc?export=view&id=1BDECXnFR4cGS543h8BXtiTr0I04lZ7ob", caption: "" },
      { id: "307", url: "https://drive.google.com/uc?export=view&id=12TRteYBzOcEFu05jWYD3sxrAnwqzry1S", caption: "" },
      { id: "308", url: "https://drive.google.com/uc?export=view&id=1eqdwEPnN5VpVrJWwBuimYBdEzXr_wOef", caption: "" },
      { id: "309", url: "https://drive.google.com/uc?export=view&id=1pz5q5K3inkbOEK4zhdG7ccIsoBIIKqvW", caption: "" },
      { id: "310", url: "https://drive.google.com/uc?export=view&id=1vfBTYs1I5zRRHbC6UIqETXu1BlPmb_JT", caption: "" },
      { id: "311", url: "https://drive.google.com/uc?export=view&id=1nRTvp45qbwFirGCHtYPW_qyT-gJnj3Jj", caption: "" },
      { id: "312", url: "https://drive.google.com/uc?export=view&id=1oq0HCd9i-UzIraRQ9SDTDZpmTZUzIfQS", caption: "" },
      { id: "313", url: "https://drive.google.com/uc?export=view&id=1jABHrMhzlzrcW90rwZQxApimUgQqmVJS", caption: "" },
      { id: "314", url: "https://drive.google.com/uc?export=view&id=1n2dFGk8vmsS6Ds8Fga5qm0pE7xxilNDq", caption: "" },
      { id: "315", url: "https://drive.google.com/uc?export=view&id=1gQYQkQorusSyFlO1DsEx8G80rHSXJ88G", caption: "" },
      { id: "316", url: "https://drive.google.com/uc?export=view&id=1PN4Eja4qh6HD943Oag_HmpuRv3vw90Fy", caption: "" },
      { id: "317", url: "https://drive.google.com/uc?export=view&id=1ytOqJ3Wc05R8zo61q94Nec27GBwuXdG6", caption: "" },
      { id: "318", url: "https://drive.google.com/uc?export=view&id=11dG5A9PdEWgwE8HFR7Wkz0GUwBLkOcGo", caption: "" },
      { id: "319", url: "https://drive.google.com/uc?export=view&id=1GrLXxEENm6tKeNLfXQW0j0aoI-zeRKTC", caption: "" },
      { id: "320", url: "https://drive.google.com/uc?export=view&id=1XlrAmbIw5SiqiNL56_ju1SvxgBfIs5V9", caption: "" },
      { id: "321", url: "https://drive.google.com/uc?export=view&id=1efcBG3MBCqspTTuHf0KCE8a6unSI7U40", caption: "" },
      { id: "322", url: "https://drive.google.com/uc?export=view&id=16yGCMOvcsGTJ9CGqXMKjlKbEJLZhBhTv", caption: "" },
      { id: "323", url: "https://drive.google.com/uc?export=view&id=1oM_rodUe0dE6VOTPR4sCbNjlh4xWIZpK", caption: "" },
      { id: "324", url: "https://drive.google.com/uc?export=view&id=1gqKjLy36l1rW-H7JPGjmbrO_o2hSrB7x", caption: "" },
      { id: "325", url: "https://drive.google.com/uc?export=view&id=1o_MRr5rTZShS7-Qr_HH3lbaWK9-O0MvS", caption: "" },
      { id: "326", url: "https://drive.google.com/uc?export=view&id=17opiShBBdmKka4_gKppivREKUQDD8yEx", caption: "" },
      { id: "327", url: "https://drive.google.com/uc?export=view&id=1QltzkD91Dlz8d8ESV-PocCkZyjrKXo0t", caption: "" },
      { id: "328", url: "https://drive.google.com/uc?export=view&id=1o4R4fJ8mf6L_piYFAHzpa3TglOKoEzMh", caption: "" },
      { id: "329", url: "https://drive.google.com/uc?export=view&id=1c11Axf6uSSxjDXmQYQjwP2ymC7zahlrM", caption: "" },
      { id: "330", url: "https://drive.google.com/uc?export=view&id=1ROj3J2mPuJYCoH_K9bP_GhyTpoOWvvgd", caption: "" },
      { id: "331", url: "https://drive.google.com/uc?export=view&id=1yKKhAkpkmf8Ao7Vnq6TE06-20E1ww0yR", caption: "" },
      { id: "332", url: "https://drive.google.com/uc?export=view&id=1eZ2KJ40ApsF4egiN1Mok1MRNx_gfBeZc", caption: "" },
      { id: "333", url: "https://drive.google.com/uc?export=view&id=1JvgQK1LQRKAlGZHZrQdqS5wSk-Xw06XB", caption: "" },
      { id: "334", url: "https://drive.google.com/uc?export=view&id=1tRiEG1qQvpYZlO1MBkOEPpoTJH4BQQar", caption: "" },
      { id: "335", url: "https://drive.google.com/uc?export=view&id=1CBhfSM4qdyffpUukNobNs8s_jbifVjip", caption: "" },
      { id: "336", url: "https://drive.google.com/uc?export=view&id=1rBBp6BEs5qckK0dN3pTrrImToRBfwN_s", caption: "" },
      { id: "337", url: "https://drive.google.com/uc?export=view&id=1eH_FRd6zMFLDefXoiKULeVBTx0doma0F", caption: "" },
      { id: "338", url: "https://drive.google.com/uc?export=view&id=1tIJMM4SZBa7R4yFS4ROlSBnHuMURJVVq", caption: "" },
      { id: "339", url: "https://drive.google.com/uc?export=view&id=1nlQIT8jDe5ZNmaGNOgM_PTXGW5JvomEV", caption: "" },
      { id: "340", url: "https://drive.google.com/uc?export=view&id=1N9xKWi6Wgvnn4idjtL_2VrT-poGslBnn", caption: "" },
      { id: "341", url: "https://drive.google.com/uc?export=view&id=1rYWjV49rsowd5inqk_X0SPAS67UBvt9n", caption: "" },
      { id: "342", url: "https://drive.google.com/uc?export=view&id=15PvPY3WLEnMxgs4iyD4PLBp2awBQ2e5y", caption: "" },
      { id: "343", url: "https://drive.google.com/uc?export=view&id=1ziyw5gcVJrWs-dUO4k8-izZRontOmC8D", caption: "" },
      { id: "344", url: "https://drive.google.com/uc?export=view&id=1KU_219FTi2ISf_oK_TfjRbE6F-twRcXv", caption: "" },
      { id: "345", url: "https://drive.google.com/uc?export=view&id=17Bxh5k7bBNMAAc8X5bqjjTkxl_4mI7uE", caption: "" },
      { id: "346", url: "https://drive.google.com/uc?export=view&id=11dsreQw55BAvPzzd9LG-uFmeF46RQLce", caption: "" },
      { id: "347", url: "https://drive.google.com/uc?export=view&id=1DIbrru4Uus1c3MyCpZ9VKDUh82K3TrDo", caption: "" },
      { id: "348", url: "https://drive.google.com/uc?export=view&id=1Tbk4zi8y7-USD0wEbG1GAQ96qITvewrS", caption: "" },
      { id: "349", url: "https://drive.google.com/uc?export=view&id=1sX1IPEj-zO1XAi70HGUHDlT74geZmP6U", caption: "" },
      { id: "350", url: "https://drive.google.com/uc?export=view&id=1j_JhBJYGzSEgDIsFfcPoWeVJSBfMqEII", caption: "" },
      { id: "351", url: "https://drive.google.com/uc?export=view&id=1G0V20tLdxwoubVQjF0JvRYyAXOX2weBb", caption: "" },
      { id: "352", url: "https://drive.google.com/uc?export=view&id=1SnDAWcDohRuojpfltOZ8U_GlfcPfGZKI", caption: "" },
      { id: "353", url: "https://drive.google.com/uc?export=view&id=1qnjCElAjpfXn-T6MhGGK-cJK_eYlVIM1", caption: "" },
      { id: "354", url: "https://drive.google.com/uc?export=view&id=1q6iz8bbKhjcbOurXHiYl8yms5HYVjMJJ", caption: "" },
      { id: "355", url: "https://drive.google.com/uc?export=view&id=1OJh35njtYTz5eFkQeGSRaYovtkyXxH08", caption: "" },
      { id: "356", url: "https://drive.google.com/uc?export=view&id=1ZPn4C7w1n3wUORYnulesZVRDT6BrtdLB", caption: "" },
      { id: "357", url: "https://drive.google.com/uc?export=view&id=1ocWIqCMTzoSuGH147xgfbA6WqIh5p9xR", caption: "" },
      { id: "358", url: "https://drive.google.com/uc?export=view&id=1l9qH-WBCLKtVdGkI98D52NXCO1S4PNfK", caption: "" },
      { id: "359", url: "https://drive.google.com/uc?export=view&id=1OIry7_3-RadhAS87jW1TCIQVPfAs5YYY", caption: "" },
      { id: "360", url: "https://drive.google.com/uc?export=view&id=1GKumo2gVx_MBT2PpKI0als02QldbF6sl", caption: "" },
      { id: "361", url: "https://drive.google.com/uc?export=view&id=15IjELKZzm5_-Uy15JvC2pUvBn6Rd6VGZ", caption: "" },
      { id: "362", url: "https://drive.google.com/uc?export=view&id=1g-E9qSkwaEZPnhkIuhdLtuNIhzbgAWIg", caption: "" },
      { id: "363", url: "https://drive.google.com/uc?export=view&id=16bTR-I6wyQ19DV0oZO6dLLCbboWyjgbL", caption: "" },
      { id: "364", url: "https://drive.google.com/uc?export=view&id=1HCcStgr2g_5GrfW7RsrNDrJJlDjX3tvl", caption: "" },
      { id: "365", url: "https://drive.google.com/uc?export=view&id=1k5EBYOa7jCtg2pKTVO3ehlWiGKJCxRIH", caption: "" },
      { id: "366", url: "https://drive.google.com/uc?export=view&id=1x-4yKf2l1kr3B391jiC7IRR9s-cX5xu2", caption: "" },
      { id: "367", url: "https://drive.google.com/uc?export=view&id=1gNYlMg27o6qVidJyjqm_QzM1X20tM2gZ", caption: "" },
      { id: "368", url: "https://drive.google.com/uc?export=view&id=1f6FjlmZ--1CbTsi1GQb2iagtKV98Nb_-", caption: "" },
      { id: "369", url: "https://drive.google.com/uc?export=view&id=1zZa4tHwZNRQm3mAqHknemkz_g7FI0Y54", caption: "" },
      { id: "370", url: "https://drive.google.com/uc?export=view&id=1A9G6ut4rF8BVw5xlIGj5XoWuUVUP2pZy", caption: "" },
      { id: "371", url: "https://drive.google.com/uc?export=view&id=1pEhEmh0qWh-AS3ADi4oPNehcI3qAUaaH", caption: "" },
      { id: "372", url: "https://drive.google.com/uc?export=view&id=1dNeIO8PXoSCseFjOM2m5LSH-jjOQgMpW", caption: "" },
      { id: "373", url: "https://drive.google.com/uc?export=view&id=1jievn-CkkRk9fSNkjAzxFp6tUmD6DiRA", caption: "" },
      { id: "374", url: "https://drive.google.com/uc?export=view&id=1QITkPdPQJnSCOCLBQmHcj7GFxjZDe12g", caption: "" },
      { id: "375", url: "https://drive.google.com/uc?export=view&id=1VnUSwcYDTHamp020ZOm4693UK7dIBjvc", caption: "" },
      { id: "376", url: "https://drive.google.com/uc?export=view&id=1VX295TRQDH9v8pGY3lYfNQ3UfADILZ_i", caption: "" },
      { id: "377", url: "https://drive.google.com/uc?export=view&id=1tWGbXg_BSuHgIKsa73V-MXm69xRYRb_L", caption: "" },
      { id: "378", url: "https://drive.google.com/uc?export=view&id=19-1a3rozMtGvSt4-Iy4diJF_7gs3hO5l", caption: "" },
      { id: "379", url: "https://drive.google.com/uc?export=view&id=1yizEJlVp0dWT3EZw8N3A4evUO7OyEbU-", caption: "" },
      { id: "380", url: "https://drive.google.com/uc?export=view&id=1hzm8sUgLu3HseHsWC71-OY74hGlikYXF", caption: "" },
      { id: "381", url: "https://drive.google.com/uc?export=view&id=1ROUICKZpjBWAuMO-3HtQZoDPSQgqxyCa", caption: "" },
      { id: "382", url: "https://drive.google.com/uc?export=view&id=1VoJLtfl_4EATIUBiIGoJgEmxhowdNKy8", caption: "" },
      { id: "383", url: "https://drive.google.com/uc?export=view&id=1cS5r2eAoQuj39n7CNmRQ_k3ncJtQlbKS", caption: "" },
      { id: "384", url: "https://drive.google.com/uc?export=view&id=1khach-79sXhpwrmEoZplpW7QbB2TNNdI", caption: "" },
      { id: "385", url: "https://drive.google.com/uc?export=view&id=1gc3bpt6cG-6aGpcHweEZXIFtHGxIi47p", caption: "" },
      { id: "386", url: "https://drive.google.com/uc?export=view&id=1sJpVz-Q94pjiK0wyxkKHKz2tNOIqBBHS", caption: "" },
      { id: "387", url: "https://drive.google.com/uc?export=view&id=1zkEkDQ0ItNrrpa7xDavXOoFnNHht5AOI", caption: "" },
      { id: "388", url: "https://drive.google.com/uc?export=view&id=1Z_VOqQhUprD9dIPuzb-dovZ-a4Ewb6MB", caption: "" },
      { id: "389", url: "https://drive.google.com/uc?export=view&id=1vCmJGXnP6q33sIQpSqQoEfdaMbRPOoxp", caption: "" },
      { id: "390", url: "https://drive.google.com/uc?export=view&id=1vNHLUNKaOr73DlFibCFWgD9b6txJ-j-q", caption: "" },
      { id: "391", url: "https://drive.google.com/uc?export=view&id=11yJcR8Xsk8qEwdyCoLYHW1_5QbOmmuBx", caption: "" },
      { id: "392", url: "https://drive.google.com/uc?export=view&id=1i3NCbc8FzcCcaxEMtVzQaVrgr1DpJlX9", caption: "" },
      { id: "393", url: "https://drive.google.com/uc?export=view&id=1JL6hflXyh3t5FwDzvaUV4gG2L0GnubVW", caption: "" },
      { id: "394", url: "https://drive.google.com/uc?export=view&id=1SYick1xdjOMub4spHCWqrLncdi2yIBlp", caption: "" },
      { id: "395", url: "https://drive.google.com/uc?export=view&id=167tXuPMw8cebY7di80qAjgqj93fGGFSN", caption: "" },
      { id: "396", url: "https://drive.google.com/uc?export=view&id=1I5MAge1Rh7RR7oBONeqls8KXr1L9fHKB", caption: "" },
      { id: "397", url: "https://drive.google.com/uc?export=view&id=1XtbMSn9M4PX_xGTy3rLlqRdPF94bGXzJ", caption: "" },
      { id: "398", url: "https://drive.google.com/uc?export=view&id=17CkgFWOY4gT9ywS3wv_czMAySUx6jF-r", caption: "" },
      { id: "399", url: "https://drive.google.com/uc?export=view&id=1h96zO--1v0ooc7cDJpf6JGRwTMdjv9yA", caption: "" },
      { id: "400", url: "https://drive.google.com/uc?export=view&id=1ZR6erQ5pd6VaZvP6PR_VpsInf33fIOw8", caption: "" },
      { id: "401", url: "https://drive.google.com/uc?export=view&id=10-G4rcbz3s91ySJ6R84IV4q4S1Fe5_42", caption: "" },
      { id: "402", url: "https://drive.google.com/uc?export=view&id=1EZqi4MRJoexkikS2HeX-h1arx3_mYp14", caption: "" },
      { id: "403", url: "https://drive.google.com/uc?export=view&id=1ExGXaUh9rKP2peeziipyZBtczDfH66tU", caption: "" },
      { id: "404", url: "https://drive.google.com/uc?export=view&id=13vd16AZtO-o4AShnn9JBBKzTUKwZtn7e", caption: "" },
      { id: "405", url: "https://drive.google.com/uc?export=view&id=1-Npu8qSEcZMEC1PdVuSPvYbDK4IumoSh", caption: "" },
      { id: "406", url: "https://drive.google.com/uc?export=view&id=1iAGRRUWpQ_isu0oRGw_GkNe6dhBl-o9a", caption: "" },
      { id: "407", url: "https://drive.google.com/uc?export=view&id=1NQ6PKilAVYnS5ZBgRisLcLWHN-DgfE6j", caption: "" },
      { id: "408", url: "https://drive.google.com/uc?export=view&id=1dy0ZeNvZrgzjtG1KwCx2LeKrumIeHoKN", caption: "" },
      { id: "409", url: "https://drive.google.com/uc?export=view&id=1F3_IaF0RhUp4hSN0fRCx-_F_nivCGQqN", caption: "" },
      { id: "410", url: "https://drive.google.com/uc?export=view&id=1n94mybqZBSpOmcdueEqPQYBB_KxDzbbY", caption: "" },
      { id: "411", url: "https://drive.google.com/uc?export=view&id=1puQAyjQ0asQ1hpXKBdhIas4D1OBqKlWb", caption: "" },
      { id: "412", url: "https://drive.google.com/uc?export=view&id=1BK5CYMUe-SQ5I6jZO-ZjbChQW2QND18y", caption: "" },
      { id: "413", url: "https://drive.google.com/uc?export=view&id=1Ms-M_ZEItrwZd-FO2AVsemg4D8BcwVnu", caption: "" },
      { id: "414", url: "https://drive.google.com/uc?export=view&id=1rhRflx5bMp6oPaanzvvOgVGh7Ehx_gRC", caption: "" },
      { id: "415", url: "https://drive.google.com/uc?export=view&id=1TZ1DST95xUKni3R1kid0bcx9RN1YGnef", caption: "" },
      { id: "416", url: "https://drive.google.com/uc?export=view&id=1CaBjctMEYqTYbxYDa3AH-lFEwMafyk-Z", caption: "" },
      { id: "417", url: "https://drive.google.com/uc?export=view&id=1w53CjMoMFfwKAYyzl2nvaAerO9nkSMXn", caption: "" },
      { id: "418", url: "https://drive.google.com/uc?export=view&id=1sISArHoH78anUE8NCjmyl7XqTAlr_7Mb", caption: "" },
      { id: "419", url: "https://drive.google.com/uc?export=view&id=1ecIECOF8AF-cyvSUSp8bqMS7CXwCAhWo", caption: "" },
      { id: "420", url: "https://drive.google.com/uc?export=view&id=1sk5FUs1GYq3mlMVe8-L1_Lkfz2Dh-Hmg", caption: "" },
      { id: "421", url: "https://drive.google.com/uc?export=view&id=1RmdWvwWQ61yMl9a13DQ1GQeqkCK9eFGs", caption: "" },
      { id: "422", url: "https://drive.google.com/uc?export=view&id=12qUAfP-LsqabTOncAbPcjtqE0cAf1sdx", caption: "" },
      { id: "423", url: "https://drive.google.com/uc?export=view&id=1J8HOheyW76cqsuCK6JuJ_EzlvoxOQIyJ", caption: "" },
      { id: "424", url: "https://drive.google.com/uc?export=view&id=1tAWN4Gr2yjLyr04weDfjC7O3nF2iPHlA", caption: "" },
      { id: "425", url: "https://drive.google.com/uc?export=view&id=1KEWgDqAr23BI6-31VQ4QApGMzaXuMQrX", caption: "" },
      { id: "426", url: "https://drive.google.com/uc?export=view&id=14NrQo2OtGOrKGPvsuNwi8oez3zb0lqsV", caption: "" },
      { id: "427", url: "https://drive.google.com/uc?export=view&id=1QYplQdDps0-xvpv7Ozumgsc3hFGeQygI", caption: "" },
      { id: "428", url: "https://drive.google.com/uc?export=view&id=1Hm7khaoSKc2FSssIAOstpyW7D_v_TJjj", caption: "" },
      { id: "429", url: "https://drive.google.com/uc?export=view&id=1Gqd7uEots_iM6PjmwmQi5eC3bmgB0Vcf", caption: "" },
      { id: "430", url: "https://drive.google.com/uc?export=view&id=1ueBKHy5pI8OyoFQNZbkC4qtv8VCJ8TnS", caption: "" },
      { id: "431", url: "https://drive.google.com/uc?export=view&id=1AKY4oOSwH31zjEJpfjQM-c3_4wF2hiUr", caption: "" },
      { id: "432", url: "https://drive.google.com/uc?export=view&id=1WPTUgoRXkMp7L1lf_lgyt0tPxCMYLBmL", caption: "" },
      { id: "433", url: "https://drive.google.com/uc?export=view&id=1oIh0NDUqPoj8kI9AXIqg329L1VtvuFof", caption: "" },
      { id: "434", url: "https://drive.google.com/uc?export=view&id=1IJaavEztghUAqubpW5lh8UF7ZKyAXTq_", caption: "" },
      { id: "435", url: "https://drive.google.com/uc?export=view&id=1XbfAPuXVZAUb2YY_x4TeXlu1VEL_SrPT", caption: "" },
      { id: "436", url: "https://drive.google.com/uc?export=view&id=1RZHey26vln_n4NFBPhTZqlx7nnUoeK6V", caption: "" },
      { id: "437", url: "https://drive.google.com/uc?export=view&id=1LVeqTzkN-yQCVkxfkgG2qsP6L80yN5Vd", caption: "" },
      { id: "438", url: "https://drive.google.com/uc?export=view&id=1spQZMD2EIHTYCxLTlU9k7k2BgkWMv3ya", caption: "" },
      { id: "439", url: "https://drive.google.com/uc?export=view&id=1qi65GfU7BxLj1EvDeS_EMiPMTsTlevfu", caption: "" },
      { id: "440", url: "https://drive.google.com/uc?export=view&id=1VrG_doCQkh-XTazXa-MHS5VHbxGbuugm", caption: "" },
      { id: "441", url: "https://drive.google.com/uc?export=view&id=1iD_AJdqGi7Zc5Msrk2NoMxHk7wC-ypwj", caption: "" },
      { id: "442", url: "https://drive.google.com/uc?export=view&id=1s1OSezXT3XPEi2E2A9sGPre_5IYHa4SE", caption: "" },
      { id: "443", url: "https://drive.google.com/uc?export=view&id=1VVXraOixoww61y1eZyZ96es6S8PcdIDB", caption: "" },
      { id: "444", url: "https://drive.google.com/uc?export=view&id=1HC5WPQfxola0Wbcb3xmID_SFbcTvSk2q", caption: "" },
      { id: "445", url: "https://drive.google.com/uc?export=view&id=1lXbYGR8xT7FvtDSWRai1UC1NgkEf-ufE", caption: "" },
      { id: "446", url: "https://drive.google.com/uc?export=view&id=1V-dYg9uCz2ai3PJC5HGH9Nx5Teu3cyMI", caption: "" },
      { id: "447", url: "https://drive.google.com/uc?export=view&id=1cBQ4yvTVsIik7lvRPOZfnFk5MMvgedxI", caption: "" },
      { id: "448", url: "https://drive.google.com/uc?export=view&id=1mjCDfElfNGPjaExiwYq-H0pqsqfQn95s", caption: "" },
      { id: "449", url: "https://drive.google.com/uc?export=view&id=192XCizD2DhrW2L40mauqZMp5D0_JCxil", caption: "" },
      { id: "450", url: "https://drive.google.com/uc?export=view&id=1-E86awpfzOnt090yuxrY_7oSv1YHAYIF", caption: "" },
      { id: "451", url: "https://drive.google.com/uc?export=view&id=19yUvNtWWyfROdejzjTkehCMNqYo6zqqJ", caption: "" },
      { id: "452", url: "https://drive.google.com/uc?export=view&id=11eTEKd1g6RZlonwot-AVzv9LUOXJ1Qo3", caption: "" },
      { id: "453", url: "https://drive.google.com/uc?export=view&id=1E4v4ZNJQpzTrq6BmGnpyC4wtoJPqm6rE", caption: "" },
      { id: "454", url: "https://drive.google.com/uc?export=view&id=19TTKOIaRVYQVujt3-WhnFaKqA2rAnSeP", caption: "" },
      { id: "455", url: "https://drive.google.com/uc?export=view&id=1-vmBZV8B1jJvlGLjYXrl1X2jTsh-Djjw", caption: "" },
      { id: "456", url: "https://drive.google.com/uc?export=view&id=1DHWEKqdWciP741QvzYO39N6awv-c3XG-", caption: "" },
      { id: "457", url: "https://drive.google.com/uc?export=view&id=1Ko3xEq2XFTaGRhsXCq8OFD7tSQSFhYX6", caption: "" },
      { id: "458", url: "https://drive.google.com/uc?export=view&id=1AH4Zu-J0UsKEcgT4L_0UOYlFjBjcyCSK", caption: "" },
      { id: "459", url: "https://drive.google.com/uc?export=view&id=1CZaKZmVLiNkr-dv0DVb7VSMhKx11z9pK", caption: "" },
      { id: "460", url: "https://drive.google.com/uc?export=view&id=1hes2Il_og7j17C_tlFNCT4Qx1nYP2ijt", caption: "" },
      { id: "461", url: "https://drive.google.com/uc?export=view&id=1oxGsmSutpri82EjYQV8VozPTc1xZCFGc", caption: "" },
      { id: "462", url: "https://drive.google.com/uc?export=view&id=18qr8O5ZUj5oU1e6sCExOMo27MRQ-Ey21", caption: "" },
      { id: "463", url: "https://drive.google.com/uc?export=view&id=18rHNoNCzfW7le0pKR2KdscVgMsSbrC28", caption: "" },
      { id: "464", url: "https://drive.google.com/uc?export=view&id=18BGlVGh1X9MpLGgUNihRinwKgj__-zQX", caption: "" },
      { id: "465", url: "https://drive.google.com/uc?export=view&id=17E8dPud3ZhVqJqoOp4e7c3DWM0OMO1yw", caption: "" },
      { id: "466", url: "https://drive.google.com/uc?export=view&id=1qLJ3Xcdz2swmScmYdu2fGNRVos1ekO1h", caption: "" },
      { id: "467", url: "https://drive.google.com/uc?export=view&id=1NM9CkXT7Ql_moJJVYXo8W3A9VrPkSeoY", caption: "" },
      { id: "468", url: "https://drive.google.com/uc?export=view&id=1PuhOUJ7R_jsIra0V_EX46oCXhnd7tEYQ", caption: "" },
      { id: "469", url: "https://drive.google.com/uc?export=view&id=1prL1AQRGSqNv8-YAL6vUCd3NVuseISgW", caption: "" },
      { id: "470", url: "https://drive.google.com/uc?export=view&id=1-GA_aJWsZZ8c6lhpUlNozwLzILwVRv4c", caption: "" },
      { id: "471", url: "https://drive.google.com/uc?export=view&id=1qcm6-Qi9-qNzc2DyqLMQnIIglSEdTVXX", caption: "" },
      { id: "472", url: "https://drive.google.com/uc?export=view&id=1p_Y1IEvvFPy-vf5JSyGWSdXwoRUlQPua", caption: "" },
      { id: "473", url: "https://drive.google.com/uc?export=view&id=1DsQkdfgA2TgogXNV9cXkqGZ8jyxCx_Rh", caption: "" },
      { id: "474", url: "https://drive.google.com/uc?export=view&id=1pvND-Qh4Gouh37w_0htacNjrc5psmxAk", caption: "" },
      { id: "475", url: "https://drive.google.com/uc?export=view&id=1tzMe5hpepa7imqWqJkjLgL069Fy5x8Vx", caption: "" },
      { id: "476", url: "https://drive.google.com/uc?export=view&id=1Khh_5kyywITOVAtfe52CjbJ0jUm0wsWt", caption: "" },
      { id: "477", url: "https://drive.google.com/uc?export=view&id=1CpZQWDj__r_5Fu6gupRxQC0gB0wkqqPb", caption: "" },
      { id: "478", url: "https://drive.google.com/uc?export=view&id=1ZfL6aJAiVCProKIMOtFwr-TzkohI4DuD", caption: "" },
      { id: "479", url: "https://drive.google.com/uc?export=view&id=1gFcLHwwRGJPq7mxQ6OoywGeDm-5-lHc_", caption: "" },
      { id: "480", url: "https://drive.google.com/uc?export=view&id=1L2X8Ta2gHl6STj-7pVtjCIPLoD7Bsong", caption: "" },
      { id: "481", url: "https://drive.google.com/uc?export=view&id=1tKxT8lEl-FXDknqcSyNMlc1r4RUjxGU_", caption: "" },
      { id: "482", url: "https://drive.google.com/uc?export=view&id=1_h-ESjgof2XxVPKxMEEcqXVmJPjASIEm", caption: "" },
      { id: "483", url: "https://drive.google.com/uc?export=view&id=1r9saTdkdzRtEr_Y8jrfUxM44NXVTWMLi", caption: "" },
      { id: "484", url: "https://drive.google.com/uc?export=view&id=1fuvnc5XNuKaOplNTCtszqQ8Loo_pNcm2", caption: "" },
      { id: "485", url: "https://drive.google.com/uc?export=view&id=1RNimz_XV1k4pdEtZubL8OQKVCj18kiIh", caption: "" },
      { id: "486", url: "https://drive.google.com/uc?export=view&id=1lmfrPkkiuAkEoE1d5f1c9ZISq6pzKF5R", caption: "" },
      { id: "487", url: "https://drive.google.com/uc?export=view&id=1pw08tnAgfcUGNMYONgIl0z29h12lKidl", caption: "" },
      { id: "488", url: "https://drive.google.com/uc?export=view&id=1skYH_rJs026nIUCcbJABcQtebTN2XHD7", caption: "" },
      { id: "489", url: "https://drive.google.com/uc?export=view&id=1PoESXQ0G771SHOvOYWDmEWr9pdhKobKt", caption: "" },
      { id: "490", url: "https://drive.google.com/uc?export=view&id=1evNgzX8cVkcsz8bg7blyl69G3KwQWc_J", caption: "" },
      { id: "491", url: "https://drive.google.com/uc?export=view&id=1XCT75CAiIbcJK1_3G1MdO1y7-XyrQ_p-", caption: "" },
      { id: "492", url: "https://drive.google.com/uc?export=view&id=1fJ6MFSY7Ey_HMMkMJEg4IMlLcu2V23_r", caption: "" },
      { id: "493", url: "https://drive.google.com/uc?export=view&id=1Mm-i39c1gH70a5fVpFSmXrPYOwQElP76", caption: "" },
      { id: "494", url: "https://drive.google.com/uc?export=view&id=1uL4oM1-tQyF0MjOMEYNluVdLx0-Rfdq0", caption: "" },
      { id: "495", url: "https://drive.google.com/uc?export=view&id=1Wvi6gZfFSkzuhhWqVW7u_LIE74T_EErm", caption: "" },
      { id: "496", url: "https://drive.google.com/uc?export=view&id=1gx_xkfHWtzwefRtSiNShtPn9Nehs8iVG", caption: "" },
      { id: "497", url: "https://drive.google.com/uc?export=view&id=1BO3eM2QDKk6_kfz-0UcphQFUD4U3Y7uo", caption: "" },
      { id: "498", url: "https://drive.google.com/uc?export=view&id=1AQ6VGhgc4KCxasZQMlLw10c6Gp-veNkL", caption: "" },
      { id: "499", url: "https://drive.google.com/uc?export=view&id=1ZTutk-o8YQ3j6lahGC0v1LQ1fV8P0z4s", caption: "" },
      { id: "500", url: "https://drive.google.com/uc?export=view&id=1EbSC5tm8Q1vTa1qPjsyt3BiBlMD_5qme", caption: "" },
      { id: "501", url: "https://drive.google.com/uc?export=view&id=12iuMhgbpRQvox6bZ3uImoUTysLFu3rUm", caption: "" },
      { id: "502", url: "https://drive.google.com/uc?export=view&id=1Rk1T5GQGx3y0U5oDZxnA5rG9rWQ6MWNY", caption: "" },
      { id: "503", url: "https://drive.google.com/uc?export=view&id=1PD2CZbdbupzIWDx7uQLqihSEULQnsgxR", caption: "" },
      { id: "504", url: "https://drive.google.com/uc?export=view&id=1bDXcoPdWlL8QVZtSJGjwRnb1CUafiF48", caption: "" },
      { id: "505", url: "https://drive.google.com/uc?export=view&id=1rJ7Y1G3v6Ndbh6QK0fkIcfgj1ebdzd96", caption: "" },
      { id: "506", url: "https://drive.google.com/uc?export=view&id=1y4L1fAEmU_fKEtRM7hJ0cc81lfZ9VCaL", caption: "" },
      { id: "507", url: "https://drive.google.com/uc?export=view&id=1aFgtnh3OOgwomy8HKT594UxerBhi4zUw", caption: "" },
      { id: "508", url: "https://drive.google.com/uc?export=view&id=1WroFMvHNhoiHpFGWb78cjG_UoxszhQ_r", caption: "" },
      { id: "509", url: "https://drive.google.com/uc?export=view&id=1-rVkwx0Pinsrxw1BnNnKv3FDhsCaM790", caption: "" },
      { id: "510", url: "https://drive.google.com/uc?export=view&id=1-yKrz_khEO9YFPGOjemwikG0OZ0jHRBr", caption: "" },
      { id: "511", url: "https://drive.google.com/uc?export=view&id=1gPAio33NQDRsUhpJrfGJvD2nj9UTGtzZ", caption: "" },
      { id: "512", url: "https://drive.google.com/uc?export=view&id=1gYSK3LLLqnsNySM6V7gOXirm3mo5qbCs", caption: "" },
      { id: "513", url: "https://drive.google.com/uc?export=view&id=1Dtkdzh-B1TKe2PkM2Xx9-cIT0IrYtyp0", caption: "" },
      { id: "514", url: "https://drive.google.com/uc?export=view&id=11CXiggqikbyTNRe6_FBxVFBzZwr1_rv7", caption: "" },
      { id: "515", url: "https://drive.google.com/uc?export=view&id=1lmRvomk3XdgEMNfqzNNsL1m7Qp_h4j67", caption: "" },
      { id: "516", url: "https://drive.google.com/uc?export=view&id=1OZSCOHMOHYTHwreNC894M1EJM_F0xwzQ", caption: "" },
      { id: "517", url: "https://drive.google.com/uc?export=view&id=1GUSU4k_9C4zGmVu2wq80KGj5aSo--CQO", caption: "" },
      { id: "518", url: "https://drive.google.com/uc?export=view&id=1ko4_zmA018NDWxTuYyadFQyiYsaHyZV-", caption: "" },
      { id: "519", url: "https://drive.google.com/uc?export=view&id=18Hre2DiF0XMqXR3cKHkFDDy2Mu-f65N9", caption: "" },
      { id: "520", url: "https://drive.google.com/uc?export=view&id=1QYBRqxmYuL39g2wAjrfLkj8x43Oe5aEs", caption: "" },
      { id: "521", url: "https://drive.google.com/uc?export=view&id=1zy_ujC_KuoymSkC3j8DyQQXkffQKBC6R", caption: "" },
      { id: "522", url: "https://drive.google.com/uc?export=view&id=15PWNBSUpGnff50ExCbxTZhvjnG6_z-Cl", caption: "" },
      { id: "523", url: "https://drive.google.com/uc?export=view&id=16Bmb-V4i2BjCMEjEQWeSX0629h3rBrbC", caption: "" },
      { id: "524", url: "https://drive.google.com/uc?export=view&id=1erV1o7j0Tby_latt2nPclI9CGeoUloV4", caption: "" },
      { id: "525", url: "https://drive.google.com/uc?export=view&id=14NbxINvkFolQOe-pkZ0Gf6hxvzEPGRiD", caption: "" },
      { id: "526", url: "https://drive.google.com/uc?export=view&id=1uaD1-UsqwAuZDFGrLBHS7Y3hb0rTpocu", caption: "" },
      { id: "527", url: "https://drive.google.com/uc?export=view&id=1qCVdnEYQ4dsB3bt0KMcoBVgcGqM2h42T", caption: "" },
      { id: "528", url: "https://drive.google.com/uc?export=view&id=1yqHgC3-B8NaeYeceXKMW0l65gyUAi0zM", caption: "" },
      { id: "529", url: "https://drive.google.com/uc?export=view&id=1hbtzvuw2PwrcT7yV5sZJig4T_vXTvJvW", caption: "" },
      { id: "530", url: "https://drive.google.com/uc?export=view&id=1skH9IDj-wxHKizU9tZVMLdD06ZAab-lX", caption: "" },
      { id: "531", url: "https://drive.google.com/uc?export=view&id=19Y38CJNGporinwGNKpwsFZW2TMm52yc7", caption: "" },
      { id: "532", url: "https://drive.google.com/uc?export=view&id=15_HQuFFEetLEBsfxMoR5ut6cEwvTeKea", caption: "" },
      { id: "533", url: "https://drive.google.com/uc?export=view&id=1_Z2H8Jf9IrEN-PBCEovaksTfvilK0d6H", caption: "" },
      { id: "534", url: "https://drive.google.com/uc?export=view&id=1d60Yi7bxMyvPluKoUZfNv5i7b0cQO4Ri", caption: "" },
      { id: "535", url: "https://drive.google.com/uc?export=view&id=1LzYOqKZF5DH0bcp1Egj3QDT7cC6cK3Na", caption: "" },
      { id: "536", url: "https://drive.google.com/uc?export=view&id=16GSm_qJND9k5_W__ZT93f9kv3ytNBorn", caption: "" },
      { id: "537", url: "https://drive.google.com/uc?export=view&id=1Q8popPuWJtXJjrkdayb-Gh0-M6gfzPB3", caption: "" },
      { id: "538", url: "https://drive.google.com/uc?export=view&id=1UFU5D-6yMe1JATAKsgTqZRY69KCVXSHX", caption: "" },
      { id: "539", url: "https://drive.google.com/uc?export=view&id=1lfW0YObN-QvzDl0Hok7Hexrzb9Y-7IHN", caption: "" },
      { id: "540", url: "https://drive.google.com/uc?export=view&id=1IgGPaNFefQZWu24ERVq3UEQkREM8A7dG", caption: "" },
      { id: "541", url: "https://drive.google.com/uc?export=view&id=1AUZTA9x7X_HwgYmMErPv3NAk5ejWKJrQ", caption: "" },
      { id: "542", url: "https://drive.google.com/uc?export=view&id=1wLSRfZxZjxMTch_r9M0kNGa7naPKDZWh", caption: "" },
      { id: "543", url: "https://drive.google.com/uc?export=view&id=1qNRNpojIPs7bD2BY4iY0iZq4kGG4g3-n", caption: "" },
      { id: "544", url: "https://drive.google.com/uc?export=view&id=1WdAAV8l5Ow1LKidWf1qwFsTKqJdCDZ-R", caption: "" },
      { id: "545", url: "https://drive.google.com/uc?export=view&id=1hmDBrj_oy2HgYDWl0MSuZ11Xtaixiygw", caption: "" },
      { id: "546", url: "https://drive.google.com/uc?export=view&id=17zYOXKW2dwB7PwPOfwW8KYs8ZQixpzRu", caption: "" },
      { id: "547", url: "https://drive.google.com/uc?export=view&id=1yMi5vBCjJejwl9mAe9nfdQcD5B4UAoMh", caption: "" },
      { id: "548", url: "https://drive.google.com/uc?export=view&id=1vdSjr3kXZJXDH9gE-LlTuAj-1zx0bMK_", caption: "" },
      { id: "549", url: "https://drive.google.com/uc?export=view&id=17AqAMzYsD7qdKRG12vmm9u8edsaOJQpS", caption: "" },
      { id: "550", url: "https://drive.google.com/uc?export=view&id=1N6QeYOg4K1LkcWE2LQchyUj0Bn0rgBcy", caption: "" },
      { id: "551", url: "https://drive.google.com/uc?export=view&id=1B-liUXvmx2WZIRQc0xiaBvhBcaW1o0kD", caption: "" },
      { id: "552", url: "https://drive.google.com/uc?export=view&id=1SxfZTtShavNS0Yuq5VAYrUpfjoXe8tzI", caption: "" },
      { id: "553", url: "https://drive.google.com/uc?export=view&id=1qCjN-uPbGoXOuIOW9tbFaksr8yP4ReBA", caption: "" },
      { id: "554", url: "https://drive.google.com/uc?export=view&id=1ssytmQgpDu1FZ1IT-nineFGbauoW1qtR", caption: "" },
      { id: "555", url: "https://drive.google.com/uc?export=view&id=1iqhOH-j4lV0v4ny7nr7ydot5UGXEo3BQ", caption: "" },
      { id: "556", url: "https://drive.google.com/uc?export=view&id=1rrM_zcK3FNoSGFIGALRscFXIa_ibSHWR", caption: "" },
      { id: "557", url: "https://drive.google.com/uc?export=view&id=1WD8Yphul1FRaeLtVbbWxzodQZjkA8sCv", caption: "" },
      { id: "558", url: "https://drive.google.com/uc?export=view&id=1k2_XfgOwIjlAVnKkxqlrfomt6ZgIJQ2s", caption: "" },
      { id: "559", url: "https://drive.google.com/uc?export=view&id=1OSd8tsoMwsf9TYNYXxXIr04TTLTmHZzG", caption: "" },
      { id: "560", url: "https://drive.google.com/uc?export=view&id=1kdAg6LXAaw48rfQFWoz6f0xYOHYbOGyP", caption: "" },
      { id: "561", url: "https://drive.google.com/uc?export=view&id=1qBsBmPx70mCXvz3cHnZLAZu11ZNbJq8Y", caption: "" },
      { id: "562", url: "https://drive.google.com/uc?export=view&id=13Rrh2WiENsUI-XhDdYcQuBvsHFOqk4Or", caption: "" },
      { id: "563", url: "https://drive.google.com/uc?export=view&id=1xY9XipQ8r4bRYmMFXNEyq87iUYqNTxrU", caption: "" },
      { id: "564", url: "https://drive.google.com/uc?export=view&id=1Vamg5Wqln9P2wORfooJsqvQSxvJOnXKa", caption: "" },
      { id: "565", url: "https://drive.google.com/uc?export=view&id=1jNJGDo_YRQt__YrImxCyHDzo049MB8QU", caption: "" },
      { id: "566", url: "https://drive.google.com/uc?export=view&id=1cvm9pd0WgA2nhvI3mhSbsecw6J2Htfow", caption: "" },
      { id: "567", url: "https://drive.google.com/uc?export=view&id=1ELdoey5XaM4S8_PhSJvpPP2IE2FSZy8a", caption: "" },
      { id: "568", url: "https://drive.google.com/uc?export=view&id=1UEzRphZhY3DF0jSUYQBJOORb4ad_GoqN", caption: "" },
      { id: "569", url: "https://drive.google.com/uc?export=view&id=1ne7TAYKo8fkKnWVXvGXmnM-TExYm4CNN", caption: "" },
      { id: "570", url: "https://drive.google.com/uc?export=view&id=1DbuIZ64PlsTlc3HLL8rb-I5DxX3oKxWl", caption: "" },
      { id: "571", url: "https://drive.google.com/uc?export=view&id=17LElYakA6bVS911TXVLLdCDwBiiGJtUW", caption: "" },
    ],
  },
 {
    id: "statistics-probability-workshop",
    title:
      "Statistics and Probability in Real World: Turning Uncertanity into Opportunity",
    category: "Workshops",
    description:
      "Enriching the knowledge of First-Year Students through JU Transformation.",
    photos: [],
  },
];
// ─────────────────────────────────────────────────────────────
// EVENT CARD COMPONENT (NO CHANGE NEEDED HERE)
// ─────────────────────────────────────────────────────────────
const EventCard = ({ event }: { event: GalleryEvent }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="gradient-border rounded-2xl overflow-hidden card-hover">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2 block">
            {event.category}
          </span>

          <h3 className="text-xl font-bold">{event.title}</h3>

          <p className="text-sm text-muted-foreground mt-1">
            {event.description}
          </p>

          <p className="text-xs text-muted-foreground/60 mt-3">
            {event.photos.length > 0
              ? `${event.photos.length} photo${
                  event.photos.length > 1 ? "s" : ""
                }`
              : "Photos coming soon"}
          </p>
        </div>

        <div>
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6">
          {event.photos.length === 0 ? (
            <div className="text-center text-muted-foreground">
              Photos will be added soon
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {event.photos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt={photo.caption || event.title}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
const Gallery = () => {
  // 🧠 GROUP EVENTS BY CATEGORY (IMPORTANT LOGIC)
  const groupedEvents: Record<Category, GalleryEvent[]> = {
    Workshops: [],
    Hackathons: [],
    "Technical Events": [],
    Projects: [],
    "Fun Activities": [],
  };

  // 🔁 LOOP THROUGH EVENTS AND SORT THEM INTO CATEGORIES
  events.forEach((event) => {
    groupedEvents[event.category].push(event);
  });

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">
          Moments captured from our journey
        </p>
      </section>

      {/* ───────────────────────────────────────────── */}
      {/* 🔥 CATEGORY SECTIONS (THIS IS YOUR "SUBSECTION") */}
      {/* ───────────────────────────────────────────── */}

      <section className="pb-24 space-y-16">
        {Object.entries(groupedEvents).map(([category, categoryEvents]) => {
          // ❌ SKIP EMPTY CATEGORIES (IMPORTANT)
          if (categoryEvents.length === 0) return null;

          return (
            <div key={category} className="container mx-auto px-4 max-w-4xl">
              
              {/* 🧩 CATEGORY HEADING */}
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                {category}
              </h2>

              {/* 📦 EVENTS UNDER THIS CATEGORY */}
              <div className="flex flex-col gap-4">
                {categoryEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Gallery;


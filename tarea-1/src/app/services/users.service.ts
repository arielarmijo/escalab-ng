import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: any[] = [
    {
        "id": 8021,
        "uid": "af866fe4-d3ee-47be-871f-eb38cf7d8284",
        "password": "euLdO8TlJ5",
        "first_name": "Bradly",
        "last_name": "Hilpert",
        "username": "bradly.hilpert",
        "email": "bradly.hilpert@email.com",
        "avatar": "https://robohash.org/etmolestiaset.png?size=300x300&set=set1",
        "gender": "Polygender",
        "phone_number": "+252 (519) 823-7083 x067",
        "social_insurance_number": "437221831",
        "date_of_birth": "1957-06-29",
        "employment": {
            "title": "Senior Banking Designer",
            "key_skill": "Technical savvy"
        },
        "address": {
            "city": "Muellermouth",
            "street_name": "Lucius Trail",
            "street_address": "51668 Swift Junction",
            "zip_code": "76894-2172",
            "state": "Mississippi",
            "country": "United States",
            "coordinates": {
                "lat": -74.35011544708304,
                "lng": 144.931619699026
            }
        },
        "credit_card": {
            "cc_number": "6771-8972-2871-9335"
        },
        "subscription": {
            "plan": "Platinum",
            "status": "Active",
            "payment_method": "Visa checkout",
            "term": "Monthly"
        }
    },
    {
        "id": 806,
        "uid": "fd42f80a-4d2d-4190-be85-8d803a149899",
        "password": "MNYj4coCTx",
        "first_name": "Jeremiah",
        "last_name": "Koch",
        "username": "jeremiah.koch",
        "email": "jeremiah.koch@email.com",
        "avatar": "https://robohash.org/etvoluptasvoluptatem.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+687 932-747-0774 x688",
        "social_insurance_number": "562408211",
        "date_of_birth": "1981-09-23",
        "employment": {
            "title": "Corporate Design Designer",
            "key_skill": "Organisation"
        },
        "address": {
            "city": "Willside",
            "street_name": "Rodriguez Divide",
            "street_address": "231 Lind Groves",
            "zip_code": "13311",
            "state": "Oklahoma",
            "country": "United States",
            "coordinates": {
                "lat": -71.45765682175778,
                "lng": 119.67481806161078
            }
        },
        "credit_card": {
            "cc_number": "6771-8978-3677-0159"
        },
        "subscription": {
            "plan": "Premium",
            "status": "Idle",
            "payment_method": "Cash",
            "term": "Annual"
        }
    },
    {
        "id": 7725,
        "uid": "a5c13edc-20a9-4319-bbb7-329b9a6b07e3",
        "password": "zyCtwX0aV2",
        "first_name": "Tad",
        "last_name": "Brekke",
        "username": "tad.brekke",
        "email": "tad.brekke@email.com",
        "avatar": "https://robohash.org/officiisomnissit.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+95 (827) 385-9138 x2677",
        "social_insurance_number": "219110285",
        "date_of_birth": "1973-08-27",
        "employment": {
            "title": "Regional Marketing Planner",
            "key_skill": "Problem solving"
        },
        "address": {
            "city": "Briannastad",
            "street_name": "Cremin Harbors",
            "street_address": "1278 Dewitt Glens",
            "zip_code": "74851",
            "state": "Florida",
            "country": "United States",
            "coordinates": {
                "lat": 72.73080044548598,
                "lng": -32.665194031721256
            }
        },
        "credit_card": {
            "cc_number": "6771-8924-9500-2242"
        },
        "subscription": {
            "plan": "Business",
            "status": "Active",
            "payment_method": "Apple Pay",
            "term": "Annual"
        }
    },
    {
        "id": 3704,
        "uid": "7747eae3-3114-43d3-8ea8-72676df88b19",
        "password": "ENz1r8nfDQ",
        "first_name": "Corine",
        "last_name": "Smith",
        "username": "corine.smith",
        "email": "corine.smith@email.com",
        "avatar": "https://robohash.org/voluptasutet.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+65 1-395-801-9683",
        "social_insurance_number": "627032055",
        "date_of_birth": "1966-01-31",
        "employment": {
            "title": "Future Administration Administrator",
            "key_skill": "Self-motivated"
        },
        "address": {
            "city": "Lake Leif",
            "street_name": "Austin Summit",
            "street_address": "4068 Cecil Dale",
            "zip_code": "18697-0288",
            "state": "Indiana",
            "country": "United States",
            "coordinates": {
                "lat": -83.06369905971948,
                "lng": 170.01117092304224
            }
        },
        "credit_card": {
            "cc_number": "4362-3038-5288-4065"
        },
        "subscription": {
            "plan": "Basic",
            "status": "Blocked",
            "payment_method": "Visa checkout",
            "term": "Annual"
        }
    },
    {
        "id": 7223,
        "uid": "129b4499-01b2-4638-84f9-81ba216ad89f",
        "password": "ZjlHG45B7p",
        "first_name": "Damian",
        "last_name": "Kozey",
        "username": "damian.kozey",
        "email": "damian.kozey@email.com",
        "avatar": "https://robohash.org/suscipitrepellatquasi.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+63 992-869-5074 x61432",
        "social_insurance_number": "145418133",
        "date_of_birth": "1972-11-14",
        "employment": {
            "title": "Human Retail Associate",
            "key_skill": "Self-motivated"
        },
        "address": {
            "city": "Millerfurt",
            "street_name": "Annamarie Views",
            "street_address": "9286 Harber Island",
            "zip_code": "16469",
            "state": "Florida",
            "country": "United States",
            "coordinates": {
                "lat": 4.98832618740353,
                "lng": 134.0927129804142
            }
        },
        "credit_card": {
            "cc_number": "4116260735204"
        },
        "subscription": {
            "plan": "Gold",
            "status": "Idle",
            "payment_method": "Bitcoins",
            "term": "Monthly"
        }
    },
    {
        "id": 543,
        "uid": "01572cdc-8e3d-481e-8656-ea7bf92b97f1",
        "password": "6NYE3BFQki",
        "first_name": "Kermit",
        "last_name": "Hermann",
        "username": "kermit.hermann",
        "email": "kermit.hermann@email.com",
        "avatar": "https://robohash.org/doloresttempore.png?size=300x300&set=set1",
        "gender": "Genderqueer",
        "phone_number": "+1-684 1-715-054-1466",
        "social_insurance_number": "972038756",
        "date_of_birth": "1969-05-31",
        "employment": {
            "title": "Legacy Administration Assistant",
            "key_skill": "Networking skills"
        },
        "address": {
            "city": "North Charles",
            "street_name": "Haag Squares",
            "street_address": "707 Brooks Village",
            "zip_code": "46584",
            "state": "Louisiana",
            "country": "United States",
            "coordinates": {
                "lat": 8.430371297192636,
                "lng": 156.94273792752432
            }
        },
        "credit_card": {
            "cc_number": "4980-2192-9198-2173"
        },
        "subscription": {
            "plan": "Business",
            "status": "Active",
            "payment_method": "Debit card",
            "term": "Full subscription"
        }
    },
    {
        "id": 262,
        "uid": "060a778b-ae54-4251-aa18-ae7c0078733a",
        "password": "35YcxqNb4h",
        "first_name": "Kristyn",
        "last_name": "Corwin",
        "username": "kristyn.corwin",
        "email": "kristyn.corwin@email.com",
        "avatar": "https://robohash.org/pariaturadipiscivoluptatem.png?size=300x300&set=set1",
        "gender": "Agender",
        "phone_number": "+855 1-884-813-6545 x0103",
        "social_insurance_number": "503312134",
        "date_of_birth": "1979-07-03",
        "employment": {
            "title": "Chief Farming Engineer",
            "key_skill": "Technical savvy"
        },
        "address": {
            "city": "Port Alda",
            "street_name": "McGlynn Square",
            "street_address": "370 Odis Forks",
            "zip_code": "35398",
            "state": "Connecticut",
            "country": "United States",
            "coordinates": {
                "lat": 67.21898297308243,
                "lng": 64.89595972980655
            }
        },
        "credit_card": {
            "cc_number": "4872-3327-9942-6691"
        },
        "subscription": {
            "plan": "Basic",
            "status": "Idle",
            "payment_method": "Money transfer",
            "term": "Annual"
        }
    },
    {
        "id": 4606,
        "uid": "5c63aa43-eed0-4049-9d72-a472cc865e0f",
        "password": "Ty8AhRwFvi",
        "first_name": "Jule",
        "last_name": "Sporer",
        "username": "jule.sporer",
        "email": "jule.sporer@email.com",
        "avatar": "https://robohash.org/nihildelenitiut.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+591 427-732-2000",
        "social_insurance_number": "392434155",
        "date_of_birth": "1961-05-21",
        "employment": {
            "title": "Future Farming Technician",
            "key_skill": "Problem solving"
        },
        "address": {
            "city": "Kerlukeside",
            "street_name": "Ardell Wall",
            "street_address": "170 Carter Rapids",
            "zip_code": "81317-9342",
            "state": "Arkansas",
            "country": "United States",
            "coordinates": {
                "lat": -49.49509811600267,
                "lng": -52.23236288336429
            }
        },
        "credit_card": {
            "cc_number": "4365-3296-9558-6408"
        },
        "subscription": {
            "plan": "Diamond",
            "status": "Pending",
            "payment_method": "Cheque",
            "term": "Full subscription"
        }
    },
    {
        "id": 6336,
        "uid": "c70bb5d3-66af-4298-9196-77be6f155d64",
        "password": "obD15dwv7B",
        "first_name": "Virgie",
        "last_name": "Thompson",
        "username": "virgie.thompson",
        "email": "virgie.thompson@email.com",
        "avatar": "https://robohash.org/etnostrumrepudiandae.png?size=300x300&set=set1",
        "gender": "Genderqueer",
        "phone_number": "+55 751-860-5304",
        "social_insurance_number": "135777423",
        "date_of_birth": "1979-12-20",
        "employment": {
            "title": "Chief Sales Liaison",
            "key_skill": "Organisation"
        },
        "address": {
            "city": "Morganstad",
            "street_name": "Kuhlman Roads",
            "street_address": "420 Schneider Plain",
            "zip_code": "20143-0578",
            "state": "Hawaii",
            "country": "United States",
            "coordinates": {
                "lat": -7.487762314585481,
                "lng": 103.9048499606771
            }
        },
        "credit_card": {
            "cc_number": "6771-8935-8453-4632"
        },
        "subscription": {
            "plan": "Starter",
            "status": "Pending",
            "payment_method": "Cheque",
            "term": "Payment in advance"
        }
    },
    {
        "id": 3366,
        "uid": "6dfa7fda-fc72-40d3-9c40-ab16e0814512",
        "password": "aweAoqFIx6",
        "first_name": "Keith",
        "last_name": "Cole",
        "username": "keith.cole",
        "email": "keith.cole@email.com",
        "avatar": "https://robohash.org/estsuntratione.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+64 603-182-0587 x9022",
        "social_insurance_number": "750104127",
        "date_of_birth": "1981-05-29",
        "employment": {
            "title": "Future Coordinator",
            "key_skill": "Technical savvy"
        },
        "address": {
            "city": "North Ahmadton",
            "street_name": "Wolf Gardens",
            "street_address": "216 Jamison Forks",
            "zip_code": "65749",
            "state": "Arizona",
            "country": "United States",
            "coordinates": {
                "lat": 16.105463925413076,
                "lng": 74.18612176151262
            }
        },
        "credit_card": {
            "cc_number": "4266436860236"
        },
        "subscription": {
            "plan": "Starter",
            "status": "Blocked",
            "payment_method": "Alipay",
            "term": "Payment in advance"
        }
    },
    {
        "id": 150,
        "uid": "bf73ebce-72a2-4788-a8b0-afa4ed1defc4",
        "password": "9L7nEkI8pz",
        "first_name": "Aaron",
        "last_name": "Torp",
        "username": "aaron.torp",
        "email": "aaron.torp@email.com",
        "avatar": "https://robohash.org/consequuntursitquo.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+247 829.371.4744 x748",
        "social_insurance_number": "278246244",
        "date_of_birth": "1987-11-17",
        "employment": {
            "title": "Product Manufacturing Planner",
            "key_skill": "Self-motivated"
        },
        "address": {
            "city": "South Jonas",
            "street_name": "Christen Manors",
            "street_address": "16119 Hessel Junctions",
            "zip_code": "42350",
            "state": "Kentucky",
            "country": "United States",
            "coordinates": {
                "lat": -29.623112767524162,
                "lng": -34.45965176542248
            }
        },
        "credit_card": {
            "cc_number": "4247136356667"
        },
        "subscription": {
            "plan": "Bronze",
            "status": "Idle",
            "payment_method": "Money transfer",
            "term": "Payment in advance"
        }
    },
    {
        "id": 4655,
        "uid": "b8b84fcf-5ed0-4b3e-adc9-c526a852b093",
        "password": "8J7t2bDraF",
        "first_name": "Alphonse",
        "last_name": "Grady",
        "username": "alphonse.grady",
        "email": "alphonse.grady@email.com",
        "avatar": "https://robohash.org/sedquounde.png?size=300x300&set=set1",
        "gender": "Agender",
        "phone_number": "+82 658-969-6572 x25061",
        "social_insurance_number": "154241475",
        "date_of_birth": "1995-10-31",
        "employment": {
            "title": "Design Technician",
            "key_skill": "Proactive"
        },
        "address": {
            "city": "Lemkeburgh",
            "street_name": "Audie Square",
            "street_address": "43777 McCullough Underpass",
            "zip_code": "57138",
            "state": "Colorado",
            "country": "United States",
            "coordinates": {
                "lat": -67.16345922735303,
                "lng": 75.94341243056422
            }
        },
        "credit_card": {
            "cc_number": "4143420671871"
        },
        "subscription": {
            "plan": "Professional",
            "status": "Idle",
            "payment_method": "Money transfer",
            "term": "Payment in advance"
        }
    },
    {
        "id": 5740,
        "uid": "abf989a1-0f55-49f4-8509-a70f91d29fea",
        "password": "KvAqHeRDOE",
        "first_name": "Burton",
        "last_name": "Muller",
        "username": "burton.muller",
        "email": "burton.muller@email.com",
        "avatar": "https://robohash.org/quibusdammaximedolorem.png?size=300x300&set=set1",
        "gender": "Male",
        "phone_number": "+261 990.390.7145 x7605",
        "social_insurance_number": "720754779",
        "date_of_birth": "1962-02-03",
        "employment": {
            "title": "Dynamic Manager",
            "key_skill": "Proactive"
        },
        "address": {
            "city": "Stehrview",
            "street_name": "Rubye Fords",
            "street_address": "684 Bennie Tunnel",
            "zip_code": "69195",
            "state": "Rhode Island",
            "country": "United States",
            "coordinates": {
                "lat": -17.995502263082628,
                "lng": 58.98111433117435
            }
        },
        "credit_card": {
            "cc_number": "6771-8990-1069-9113"
        },
        "subscription": {
            "plan": "Diamond",
            "status": "Blocked",
            "payment_method": "Money transfer",
            "term": "Full subscription"
        }
    },
    {
        "id": 4490,
        "uid": "54ff6f4d-ff43-47e8-acd1-09b5235a7548",
        "password": "Y09lh3JuVi",
        "first_name": "Dann",
        "last_name": "Doyle",
        "username": "dann.doyle",
        "email": "dann.doyle@email.com",
        "avatar": "https://robohash.org/omnisutvero.png?size=300x300&set=set1",
        "gender": "Non-binary",
        "phone_number": "+685 1-968-658-4349 x174",
        "social_insurance_number": "782360705",
        "date_of_birth": "1992-11-25",
        "employment": {
            "title": "Corporate Retail Officer",
            "key_skill": "Teamwork"
        },
        "address": {
            "city": "North Remona",
            "street_name": "Cicely Knolls",
            "street_address": "814 Nannie Plains",
            "zip_code": "27450-7988",
            "state": "Connecticut",
            "country": "United States",
            "coordinates": {
                "lat": 14.217012782264362,
                "lng": -91.66874212261038
            }
        },
        "credit_card": {
            "cc_number": "6771-8928-7341-3979"
        },
        "subscription": {
            "plan": "Essential",
            "status": "Idle",
            "payment_method": "Bitcoins",
            "term": "Monthly"
        }
    },
    {
        "id": 822,
        "uid": "da3e5797-0b00-4a26-9b1f-e75a0823eea9",
        "password": "zGDOpXwk9J",
        "first_name": "Claudio",
        "last_name": "Tromp",
        "username": "claudio.tromp",
        "email": "claudio.tromp@email.com",
        "avatar": "https://robohash.org/utveritatisquibusdam.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+685 1-258-719-6022",
        "social_insurance_number": "677511479",
        "date_of_birth": "2000-01-27",
        "employment": {
            "title": "Sales Representative",
            "key_skill": "Self-motivated"
        },
        "address": {
            "city": "Port Jameview",
            "street_name": "Dibbert Track",
            "street_address": "2510 Renay Roads",
            "zip_code": "53777-3854",
            "state": "Missouri",
            "country": "United States",
            "coordinates": {
                "lat": 40.36230787144683,
                "lng": 60.13334721408913
            }
        },
        "credit_card": {
            "cc_number": "4845-6666-6538-5570"
        },
        "subscription": {
            "plan": "Gold",
            "status": "Blocked",
            "payment_method": "Google Pay",
            "term": "Payment in advance"
        }
    }
];

  constructor() { }

  getUsers(): any[] {
    return this.users;
  }

  getRandomUser(): any {
    const i = Math.floor(Math.random() * this.users.length);
    return this.users[i];
  }

}

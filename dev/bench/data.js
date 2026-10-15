window.BENCHMARK_DATA = {
  "lastUpdate": 1792031199078,
  "repoUrl": "https://github.com/open-planning/roboplan",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "open-planning",
            "username": "open-planning"
          },
          "committer": {
            "name": "open-planning",
            "username": "open-planning"
          },
          "id": "1390424e223adaaff416a1f42e1f9f385cf4a3e3",
          "message": "Add benchmarks and actually check CI",
          "timestamp": "2026-09-28T16:35:31Z",
          "url": "https://github.com/open-planning/roboplan/pull/357/commits/1390424e223adaaff416a1f42e1f9f385cf4a3e3"
        },
        "date": 1790651915758,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[so101]",
            "value": 1.7148909204581977,
            "unit": "iter/sec",
            "range": "stddev: 0.4693640809422838",
            "extra": "mean: 583.1274678 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[so101]",
            "value": 7.873719811895632,
            "unit": "iter/sec",
            "range": "stddev: 0.0683900730211882",
            "extra": "mean: 127.00477333333579 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[kinova]",
            "value": 3.2206435646622773,
            "unit": "iter/sec",
            "range": "stddev: 0.12191830071476292",
            "extra": "mean: 310.4969488000023 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[kinova]",
            "value": 7.625481160521627,
            "unit": "iter/sec",
            "range": "stddev: 0.09173363741332",
            "extra": "mean: 131.13926570000132 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[ur5]",
            "value": 1.8628787440932197,
            "unit": "iter/sec",
            "range": "stddev: 0.5079338647316666",
            "extra": "mean: 536.8035913076903 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[ur5]",
            "value": 3.0194991327486598,
            "unit": "iter/sec",
            "range": "stddev: 0.5823827913252341",
            "extra": "mean: 331.18075417021123 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[franka]",
            "value": 9.865084864154156,
            "unit": "iter/sec",
            "range": "stddev: 0.06069557887876339",
            "extra": "mean: 101.36760238460869 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[franka]",
            "value": 27.890995238842123,
            "unit": "iter/sec",
            "range": "stddev: 0.010079447275121821",
            "extra": "mean: 35.8538657884592 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[dual]",
            "value": 0.3922701186660971,
            "unit": "iter/sec",
            "range": "stddev: 1.3641472353644701",
            "extra": "mean: 2.5492637659999957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[dual]",
            "value": 12.471018133296969,
            "unit": "iter/sec",
            "range": "stddev: 0.024687512540151495",
            "extra": "mean: 80.18591499999924 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-no_obstacles]",
            "value": 67.52681144654014,
            "unit": "iter/sec",
            "range": "stddev: 0.011356191578242874",
            "extra": "mean: 14.80893260881544 msec\nrounds: 363"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-with_obstacles]",
            "value": 88.09445513359162,
            "unit": "iter/sec",
            "range": "stddev: 0.009301362464880709",
            "extra": "mean: 11.35145223934402 msec\nrounds: 305"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-with_obstacles]",
            "value": 433.32509345864776,
            "unit": "iter/sec",
            "range": "stddev: 0.00011876416207058834",
            "extra": "mean: 2.3077361895161745 msec\nrounds: 496"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-no_obstacles]",
            "value": 397.42112312725294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002153374871188758",
            "extra": "mean: 2.516222570484265 msec\nrounds: 454"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "open-planning",
            "username": "open-planning"
          },
          "committer": {
            "name": "open-planning",
            "username": "open-planning"
          },
          "id": "964ebe9c3df7fc03b6fb4b4049bf91ae363957b3",
          "message": "Add benchmarks and actually check CI",
          "timestamp": "2026-10-07T11:27:07Z",
          "url": "https://github.com/open-planning/roboplan/pull/357/commits/964ebe9c3df7fc03b6fb4b4049bf91ae363957b3"
        },
        "date": 1791388072294,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.Bounded]",
            "value": 464.1912300058815,
            "unit": "iter/sec",
            "range": "stddev: 0.00017644765444384982",
            "extra": "mean: 2.154284560669812 msec\nrounds: 478"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.TimeOptimal]",
            "value": 841.4304322432565,
            "unit": "iter/sec",
            "range": "stddev: 0.000045798216781182216",
            "extra": "mean: 1.1884523802330234 msec\nrounds: 860"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[so101]",
            "value": 4828.633180302709,
            "unit": "iter/sec",
            "range": "stddev: 0.000004282475630168403",
            "extra": "mean: 207.0979431776405 usec\nrounds: 4910"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-no_obstacles]",
            "value": 83.88714401654474,
            "unit": "iter/sec",
            "range": "stddev: 0.008875614509006823",
            "extra": "mean: 11.920777751150688 msec\nrounds: 434"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-no_obstacles]",
            "value": 474.48701353440856,
            "unit": "iter/sec",
            "range": "stddev: 0.00009141336008867649",
            "extra": "mean: 2.107539240223026 msec\nrounds: 537"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.Bounded]",
            "value": 290.00562434932004,
            "unit": "iter/sec",
            "range": "stddev: 0.00003590216415455501",
            "extra": "mean: 3.4482089864418337 msec\nrounds: 295"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.TimeOptimal]",
            "value": 511.56753610457633,
            "unit": "iter/sec",
            "range": "stddev: 0.000028085529654542372",
            "extra": "mean: 1.9547761134623225 msec\nrounds: 520"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[kinova]",
            "value": 1959.8303904597003,
            "unit": "iter/sec",
            "range": "stddev: 0.000008733581801888688",
            "extra": "mean: 510.2482362085623 usec\nrounds: 1994"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-with_obstacles]",
            "value": 514.3738974426136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001016247100907402",
            "extra": "mean: 1.944111093062543 msec\nrounds: 591"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-with_obstacles]",
            "value": 114.26313788772649,
            "unit": "iter/sec",
            "range": "stddev: 0.006935909888080832",
            "extra": "mean: 8.751728846993396 msec\nrounds: 366"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.Bounded]",
            "value": 218.2460602984489,
            "unit": "iter/sec",
            "range": "stddev: 0.00006341876621784274",
            "extra": "mean: 4.581984200001191 msec\nrounds: 225"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.TimeOptimal]",
            "value": 385.07665939039043,
            "unit": "iter/sec",
            "range": "stddev: 0.000020539677335133854",
            "extra": "mean: 2.596885517764401 msec\nrounds: 394"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[ur5]",
            "value": 2707.1986965024853,
            "unit": "iter/sec",
            "range": "stddev: 0.00003134781374612189",
            "extra": "mean: 369.38552064609496 usec\nrounds: 2785"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.Bounded]",
            "value": 23.442420985395344,
            "unit": "iter/sec",
            "range": "stddev: 0.00024023901944389707",
            "extra": "mean: 42.65771016666756 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.TimeOptimal]",
            "value": 39.49022268979967,
            "unit": "iter/sec",
            "range": "stddev: 0.00014413843506014945",
            "extra": "mean: 25.322723750005594 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[franka]",
            "value": 2289.8320128686732,
            "unit": "iter/sec",
            "range": "stddev: 0.000008954930368778484",
            "extra": "mean: 436.71325860590633 usec\nrounds: 2324"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[dual]",
            "value": 1515.1991360389827,
            "unit": "iter/sec",
            "range": "stddev: 0.000012292801635800341",
            "extra": "mean: 659.9792569933675 usec\nrounds: 1537"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[so101]",
            "value": 2.3039489928280203,
            "unit": "iter/sec",
            "range": "stddev: 0.35237579700662014",
            "extra": "mean: 434.03738672727013 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[so101]",
            "value": 10.430349565012298,
            "unit": "iter/sec",
            "range": "stddev: 0.053677360507299085",
            "extra": "mean: 95.87406383333624 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[kinova]",
            "value": 2.836513186869488,
            "unit": "iter/sec",
            "range": "stddev: 0.23728947929123542",
            "extra": "mean: 352.5455142000055 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[kinova]",
            "value": 4.295452119236961,
            "unit": "iter/sec",
            "range": "stddev: 0.3117178761455457",
            "extra": "mean: 232.80436429998872 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[ur5]",
            "value": 0.36761361571544837,
            "unit": "iter/sec",
            "range": "stddev: 5.333203426129904",
            "extra": "mean: 2.7202474479999967 sec\nrounds: 46"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[ur5]",
            "value": 4.518265847854868,
            "unit": "iter/sec",
            "range": "stddev: 0.44809321906875255",
            "extra": "mean: 221.32385160000467 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[franka]",
            "value": 10.146636191097473,
            "unit": "iter/sec",
            "range": "stddev: 0.061861361709532624",
            "extra": "mean: 98.55482951851442 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[franka]",
            "value": 37.861227071329,
            "unit": "iter/sec",
            "range": "stddev: 0.007015908120956612",
            "extra": "mean: 26.41224485714742 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[dual]",
            "value": 0.15726026456059672,
            "unit": "iter/sec",
            "range": "stddev: 5.548792707852376",
            "extra": "mean: 6.358885398000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[dual]",
            "value": 16.076060780135258,
            "unit": "iter/sec",
            "range": "stddev: 0.014717242614637317",
            "extra": "mean: 62.20429330770335 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[tiago_pro]",
            "value": 0.06341194213598926,
            "unit": "iter/sec",
            "range": "stddev: 9.73929209842277",
            "extra": "mean: 15.769900216200018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[tiago_pro]",
            "value": 5.537008334438548,
            "unit": "iter/sec",
            "range": "stddev: 0.04934423183553806",
            "extra": "mean: 180.6029428889057 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "7966037+eholum@users.noreply.github.com",
            "name": "Erik Holum",
            "username": "eholum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ca0fdb2a121b166d8a2cb90d0e4611e33a41edf",
          "message": "Add benchmarks and actually check CI (#357)",
          "timestamp": "2026-10-11T14:40:42-04:00",
          "tree_id": "302dffaec4b81934957d67abff098464700cb44d",
          "url": "https://github.com/open-planning/roboplan/commit/3ca0fdb2a121b166d8a2cb90d0e4611e33a41edf"
        },
        "date": 1791745044165,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.Bounded]",
            "value": 459.3591231832644,
            "unit": "iter/sec",
            "range": "stddev: 0.00019571201606313955",
            "extra": "mean: 2.1769459874230983 msec\nrounds: 477"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.TimeOptimal]",
            "value": 840.487977434258,
            "unit": "iter/sec",
            "range": "stddev: 0.00005226451101255634",
            "extra": "mean: 1.1897850140018438 msec\nrounds: 857"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[so101]",
            "value": 4724.128029991241,
            "unit": "iter/sec",
            "range": "stddev: 0.000017136415294578403",
            "extra": "mean: 211.6792757629505 usec\nrounds: 4881"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-no_obstacles]",
            "value": 84.22780593749323,
            "unit": "iter/sec",
            "range": "stddev: 0.008831277535523669",
            "extra": "mean: 11.872563803242311 msec\nrounds: 432"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-no_obstacles]",
            "value": 470.53067902178867,
            "unit": "iter/sec",
            "range": "stddev: 0.00008949173988982897",
            "extra": "mean: 2.1252599343340446 msec\nrounds: 533"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.Bounded]",
            "value": 291.3403622621772,
            "unit": "iter/sec",
            "range": "stddev: 0.00002509222415857987",
            "extra": "mean: 3.432411466215244 msec\nrounds: 296"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.TimeOptimal]",
            "value": 510.8202808172579,
            "unit": "iter/sec",
            "range": "stddev: 0.00002471310294282884",
            "extra": "mean: 1.9576356647392832 msec\nrounds: 519"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[kinova]",
            "value": 1872.6968106747283,
            "unit": "iter/sec",
            "range": "stddev: 0.000016700069330480697",
            "extra": "mean: 533.9892684709076 usec\nrounds: 1922"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-with_obstacles]",
            "value": 503.67196449330373,
            "unit": "iter/sec",
            "range": "stddev: 0.00010671071183341193",
            "extra": "mean: 1.985419222223346 msec\nrounds: 585"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-with_obstacles]",
            "value": 106.26629190500128,
            "unit": "iter/sec",
            "range": "stddev: 0.007479978218434312",
            "extra": "mean: 9.410321768769052 msec\nrounds: 333"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.Bounded]",
            "value": 209.4641015289486,
            "unit": "iter/sec",
            "range": "stddev: 0.0001194565749527266",
            "extra": "mean: 4.774087744394697 msec\nrounds: 223"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.TimeOptimal]",
            "value": 376.03737997047284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000490940492803008",
            "extra": "mean: 2.6593100932639246 msec\nrounds: 386"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[ur5]",
            "value": 2694.5902754263957,
            "unit": "iter/sec",
            "range": "stddev: 0.000008528533283953547",
            "extra": "mean: 371.11393487893395 usec\nrounds: 2718"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.Bounded]",
            "value": 22.79423000082193,
            "unit": "iter/sec",
            "range": "stddev: 0.00025827316141688875",
            "extra": "mean: 43.870751500004225 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.TimeOptimal]",
            "value": 38.347213467778204,
            "unit": "iter/sec",
            "range": "stddev: 0.00011314776288295771",
            "extra": "mean: 26.077514102563526 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[franka]",
            "value": 2252.6831263697895,
            "unit": "iter/sec",
            "range": "stddev: 0.000009707257139061466",
            "extra": "mean: 443.9150754467208 usec\nrounds: 2293"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[dual]",
            "value": 1481.3217309716833,
            "unit": "iter/sec",
            "range": "stddev: 0.000011005806435306946",
            "extra": "mean: 675.0727941755388 usec\nrounds: 1511"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[so101]",
            "value": 2.861838021663376,
            "unit": "iter/sec",
            "range": "stddev: 0.23204359446219716",
            "extra": "mean: 349.4257859565278 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[so101]",
            "value": 9.56588979641406,
            "unit": "iter/sec",
            "range": "stddev: 0.06127705557678178",
            "extra": "mean: 104.53810584090851 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[kinova]",
            "value": 2.436744300074576,
            "unit": "iter/sec",
            "range": "stddev: 0.20782981914308532",
            "extra": "mean: 410.38364180000144 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[kinova]",
            "value": 5.869973611394079,
            "unit": "iter/sec",
            "range": "stddev: 0.13318994516346128",
            "extra": "mean: 170.35851712500403 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[ur5]",
            "value": 0.3346464200765645,
            "unit": "iter/sec",
            "range": "stddev: 4.62667962363113",
            "extra": "mean: 2.9882285899583443 sec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[ur5]",
            "value": 3.8858946179723626,
            "unit": "iter/sec",
            "range": "stddev: 0.4258042626573952",
            "extra": "mean: 257.34099822856086 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[franka]",
            "value": 10.863422825580104,
            "unit": "iter/sec",
            "range": "stddev: 0.04190095662204475",
            "extra": "mean: 92.0520186000033 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[franka]",
            "value": 33.87040533427335,
            "unit": "iter/sec",
            "range": "stddev: 0.008270664887962388",
            "extra": "mean: 29.524299757585226 msec\nrounds: 66"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[dual]",
            "value": 0.10908747947179147,
            "unit": "iter/sec",
            "range": "stddev: 7.759914634940738",
            "extra": "mean: 9.166954858999986 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[dual]",
            "value": 14.407495735936392,
            "unit": "iter/sec",
            "range": "stddev: 0.030780333401416556",
            "extra": "mean: 69.40831483334857 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[tiago_pro]",
            "value": 0.13982359861314686,
            "unit": "iter/sec",
            "range": "stddev: 8.762913609775273",
            "extra": "mean: 7.1518685681000305 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[tiago_pro]",
            "value": 4.526365051430091,
            "unit": "iter/sec",
            "range": "stddev: 0.08620364820565403",
            "extra": "mean: 220.92782809995697 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4603398+sea-bass@users.noreply.github.com",
            "name": "Sebastian Castro",
            "username": "sea-bass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3201c12dcbb75510b8e8c9f6a17f95f9eccd40f",
          "message": "Switch to nanoflann for RRT K-D trees (#376)",
          "timestamp": "2026-10-14T10:05:32-04:00",
          "tree_id": "b8f23bae0237e3be8582a6ad4d01d9de39b1f1aa",
          "url": "https://github.com/open-planning/roboplan/commit/d3201c12dcbb75510b8e8c9f6a17f95f9eccd40f"
        },
        "date": 1791987744085,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.Bounded]",
            "value": 363.98298443829407,
            "unit": "iter/sec",
            "range": "stddev: 0.00019890929535510196",
            "extra": "mean: 2.7473811764668623 msec\nrounds: 374"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.TimeOptimal]",
            "value": 654.1860538595031,
            "unit": "iter/sec",
            "range": "stddev: 0.000028165815064855895",
            "extra": "mean: 1.5286171175620413 msec\nrounds: 672"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[so101]",
            "value": 3740.1995106094882,
            "unit": "iter/sec",
            "range": "stddev: 0.000009707825123441527",
            "extra": "mean: 267.36541651411636 usec\nrounds: 3815"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-no_obstacles]",
            "value": 65.59562945136068,
            "unit": "iter/sec",
            "range": "stddev: 0.011250156328430674",
            "extra": "mean: 15.244918119758303 msec\nrounds: 334"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-no_obstacles]",
            "value": 368.46753888946404,
            "unit": "iter/sec",
            "range": "stddev: 0.00012212721467003317",
            "extra": "mean: 2.713943277103681 msec\nrounds: 415"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.Bounded]",
            "value": 224.40289970026095,
            "unit": "iter/sec",
            "range": "stddev: 0.000047788009177112626",
            "extra": "mean: 4.456270401744889 msec\nrounds: 229"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.TimeOptimal]",
            "value": 397.9921481331272,
            "unit": "iter/sec",
            "range": "stddev: 0.000024782594139540088",
            "extra": "mean: 2.512612383663164 msec\nrounds: 404"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[kinova]",
            "value": 1505.4932810354182,
            "unit": "iter/sec",
            "range": "stddev: 0.000020788183409843985",
            "extra": "mean: 664.2341168817704 usec\nrounds: 1540"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-with_obstacles]",
            "value": 397.98380846479284,
            "unit": "iter/sec",
            "range": "stddev: 0.00012763996936912143",
            "extra": "mean: 2.5126650349356203 msec\nrounds: 458"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-with_obstacles]",
            "value": 88.05377531225221,
            "unit": "iter/sec",
            "range": "stddev: 0.008833195957525092",
            "extra": "mean: 11.356696478417268 msec\nrounds: 278"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.Bounded]",
            "value": 164.29936749367485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008395242274966219",
            "extra": "mean: 6.086450698226199 msec\nrounds: 169"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.TimeOptimal]",
            "value": 295.55306100509785,
            "unit": "iter/sec",
            "range": "stddev: 0.00005956379822963712",
            "extra": "mean: 3.3834872039533757 msec\nrounds: 304"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[ur5]",
            "value": 2140.9508013677982,
            "unit": "iter/sec",
            "range": "stddev: 0.000011685280511823536",
            "extra": "mean: 467.0821951448515 usec\nrounds: 2183"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.Bounded]",
            "value": 17.744639448915112,
            "unit": "iter/sec",
            "range": "stddev: 0.00024917064579866265",
            "extra": "mean: 56.35504755556693 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.TimeOptimal]",
            "value": 29.755806858355815,
            "unit": "iter/sec",
            "range": "stddev: 0.00014963638439050405",
            "extra": "mean: 33.60688569999866 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[franka]",
            "value": 1774.15668091115,
            "unit": "iter/sec",
            "range": "stddev: 0.000023049236406360754",
            "extra": "mean: 563.6480761588836 usec\nrounds: 1812"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[dual]",
            "value": 1178.5010403847093,
            "unit": "iter/sec",
            "range": "stddev: 0.000015361753072798298",
            "extra": "mean: 848.5355258350561 usec\nrounds: 1200"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[so101]",
            "value": 1.8895203215887864,
            "unit": "iter/sec",
            "range": "stddev: 0.2920372577961875",
            "extra": "mean: 529.2348478999997 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[so101]",
            "value": 7.047368137273195,
            "unit": "iter/sec",
            "range": "stddev: 0.08164527454376812",
            "extra": "mean: 141.89694372726854 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[kinova]",
            "value": 1.2679961581532637,
            "unit": "iter/sec",
            "range": "stddev: 0.7640369678913431",
            "extra": "mean: 788.6459225999715 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[kinova]",
            "value": 4.56800752694066,
            "unit": "iter/sec",
            "range": "stddev: 0.11748374360863699",
            "extra": "mean: 218.91382492308017 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[ur5]",
            "value": 0.24254822968652184,
            "unit": "iter/sec",
            "range": "stddev: 5.1621859692168774",
            "extra": "mean: 4.122891357700018 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[ur5]",
            "value": 4.30930634667187,
            "unit": "iter/sec",
            "range": "stddev: 0.39863080671360246",
            "extra": "mean: 232.0559086666726 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[franka]",
            "value": 8.729110170045793,
            "unit": "iter/sec",
            "range": "stddev: 0.07216038653156998",
            "extra": "mean: 114.55921400001691 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[franka]",
            "value": 26.950832956750585,
            "unit": "iter/sec",
            "range": "stddev: 0.01215696665498648",
            "extra": "mean: 37.10460458141507 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[dual]",
            "value": 0.1385667043307481,
            "unit": "iter/sec",
            "range": "stddev: 8.279310130899741",
            "extra": "mean: 7.2167408817999785 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[dual]",
            "value": 12.012634967856727,
            "unit": "iter/sec",
            "range": "stddev: 0.02095928748751749",
            "extra": "mean: 83.24568278947864 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[tiago_pro]",
            "value": 0.3732164752401204,
            "unit": "iter/sec",
            "range": "stddev: 4.227604899123313",
            "extra": "mean: 2.6794101181000087 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[tiago_pro]",
            "value": 3.8706754804654144,
            "unit": "iter/sec",
            "range": "stddev: 0.055410261903263015",
            "extra": "mean: 258.35283919998346 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4603398+sea-bass@users.noreply.github.com",
            "name": "Sebastian Castro",
            "username": "sea-bass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3546dd1f0f6e51dcd4d46ff452a7fdb6ae3873f2",
          "message": "Change OInK to solve cascade of QPs + add Relative pose constraint (#363)",
          "timestamp": "2026-10-14T14:24:06-04:00",
          "tree_id": "8069a6e30bc375f0001cc43fce1a0db22cb5dbc3",
          "url": "https://github.com/open-planning/roboplan/commit/3546dd1f0f6e51dcd4d46ff452a7fdb6ae3873f2"
        },
        "date": 1792002972511,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.Bounded]",
            "value": 470.94791242639116,
            "unit": "iter/sec",
            "range": "stddev: 0.000018175282207558704",
            "extra": "mean: 2.1233770733749653 msec\nrounds: 477"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.TimeOptimal]",
            "value": 831.633341082093,
            "unit": "iter/sec",
            "range": "stddev: 0.00001959049300048829",
            "extra": "mean: 1.202452992924543 msec\nrounds: 848"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[so101]",
            "value": 4849.266187590551,
            "unit": "iter/sec",
            "range": "stddev: 0.000006105360355072401",
            "extra": "mean: 206.2167679223377 usec\nrounds: 4938"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-no_obstacles]",
            "value": 83.95690970167847,
            "unit": "iter/sec",
            "range": "stddev: 0.008816826494744183",
            "extra": "mean: 11.910871940776161 msec\nrounds: 439"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-no_obstacles]",
            "value": 475.07493642379376,
            "unit": "iter/sec",
            "range": "stddev: 0.00009125868269569677",
            "extra": "mean: 2.1049310820892124 msec\nrounds: 536"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.Bounded]",
            "value": 271.81602347562773,
            "unit": "iter/sec",
            "range": "stddev: 0.000030045919407659077",
            "extra": "mean: 3.678958978257824 msec\nrounds: 276"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.TimeOptimal]",
            "value": 456.14859653525303,
            "unit": "iter/sec",
            "range": "stddev: 0.000029983791142811406",
            "extra": "mean: 2.192268062634971 msec\nrounds: 463"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[kinova]",
            "value": 1933.4413521323027,
            "unit": "iter/sec",
            "range": "stddev: 0.00005137197369284953",
            "extra": "mean: 517.2124817218513 usec\nrounds: 1997"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-with_obstacles]",
            "value": 512.1246521715716,
            "unit": "iter/sec",
            "range": "stddev: 0.00010277515498052596",
            "extra": "mean: 1.9526496054421159 msec\nrounds: 588"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-with_obstacles]",
            "value": 112.61554497995019,
            "unit": "iter/sec",
            "range": "stddev: 0.007044303150145722",
            "extra": "mean: 8.879768775953957 msec\nrounds: 366"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.Bounded]",
            "value": 183.08811373254426,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333180240276966",
            "extra": "mean: 5.461851015958379 msec\nrounds: 188"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.TimeOptimal]",
            "value": 319.9817168513809,
            "unit": "iter/sec",
            "range": "stddev: 0.00003845791122295374",
            "extra": "mean: 3.1251785565750345 msec\nrounds: 327"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[ur5]",
            "value": 2780.5765835654015,
            "unit": "iter/sec",
            "range": "stddev: 0.000006504542521345972",
            "extra": "mean: 359.63763987314724 usec\nrounds: 2824"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.Bounded]",
            "value": 28.73164838224113,
            "unit": "iter/sec",
            "range": "stddev: 0.0020574136507165042",
            "extra": "mean: 34.80482521212025 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.TimeOptimal]",
            "value": 51.3004245879717,
            "unit": "iter/sec",
            "range": "stddev: 0.0017391299825335977",
            "extra": "mean: 19.493016052628693 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[franka]",
            "value": 2295.7025810499554,
            "unit": "iter/sec",
            "range": "stddev: 0.00000855709766475309",
            "extra": "mean: 435.59649592877275 usec\nrounds: 2333"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[dual]",
            "value": 1516.58530147374,
            "unit": "iter/sec",
            "range": "stddev: 0.000010994255566610021",
            "extra": "mean: 659.37603313724 usec\nrounds: 1539"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[so101]",
            "value": 2.979894355390729,
            "unit": "iter/sec",
            "range": "stddev: 0.23867114347541565",
            "extra": "mean: 335.5823665999992 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[so101]",
            "value": 8.648378314049776,
            "unit": "iter/sec",
            "range": "stddev: 0.04989998981349673",
            "extra": "mean: 115.62861425424046 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[kinova]",
            "value": 2.264060230448308,
            "unit": "iter/sec",
            "range": "stddev: 0.43276022937142483",
            "extra": "mean: 441.6843627000105 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[kinova]",
            "value": 6.845591462937389,
            "unit": "iter/sec",
            "range": "stddev: 0.11602172251474356",
            "extra": "mean: 146.07941555000536 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[ur5]",
            "value": 0.4228644404370382,
            "unit": "iter/sec",
            "range": "stddev: 5.2844982601961314",
            "extra": "mean: 2.364824053227274 sec\nrounds: 22"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[ur5]",
            "value": 2.2799754006583877,
            "unit": "iter/sec",
            "range": "stddev: 0.5772992870620315",
            "extra": "mean: 438.6012233777744 msec\nrounds: 90"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[franka]",
            "value": 10.038923810170541,
            "unit": "iter/sec",
            "range": "stddev: 0.04625097394404062",
            "extra": "mean: 99.61227108695549 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[franka]",
            "value": 35.387243197628024,
            "unit": "iter/sec",
            "range": "stddev: 0.008007490151549725",
            "extra": "mean: 28.258770947916883 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[dual]",
            "value": 0.23620707638810376,
            "unit": "iter/sec",
            "range": "stddev: 4.78700490685278",
            "extra": "mean: 4.2335734191000025 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[dual]",
            "value": 17.131653914422895,
            "unit": "iter/sec",
            "range": "stddev: 0.01706371271825094",
            "extra": "mean: 58.371480359996895 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[tiago_pro]",
            "value": 0.3429793193108887,
            "unit": "iter/sec",
            "range": "stddev: 4.364596518137476",
            "extra": "mean: 2.9156276885999772 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[tiago_pro]",
            "value": 4.187385018987343,
            "unit": "iter/sec",
            "range": "stddev: 0.1365407728441218",
            "extra": "mean: 238.8125274999993 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4603398+sea-bass@users.noreply.github.com",
            "name": "Sebastian Castro",
            "username": "sea-bass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1f4442b20a5037e959db57007722356b8307145",
          "message": "Iterative interface for OInK (#371)",
          "timestamp": "2026-10-14T22:13:21-04:00",
          "tree_id": "041412f795697c7edfcc3f870668eeb38b6d8ac8",
          "url": "https://github.com/open-planning/roboplan/commit/b1f4442b20a5037e959db57007722356b8307145"
        },
        "date": 1792031198308,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.Bounded]",
            "value": 193.66622745010724,
            "unit": "iter/sec",
            "range": "stddev: 0.00006346951667716858",
            "extra": "mean: 5.163522897959183 msec\nrounds: 196"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[ur5-CartesianSpeedMode.TimeOptimal]",
            "value": 232.01110613377045,
            "unit": "iter/sec",
            "range": "stddev: 0.00009133596261295548",
            "extra": "mean: 4.310138495798692 msec\nrounds: 238"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[so101]",
            "value": 4918.473333669467,
            "unit": "iter/sec",
            "range": "stddev: 0.000006836728389358372",
            "extra": "mean: 203.3151208027272 usec\nrounds: 5033"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-no_obstacles]",
            "value": 90.83352791333459,
            "unit": "iter/sec",
            "range": "stddev: 0.007986471726548358",
            "extra": "mean: 11.009150728507567 msec\nrounds: 442"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-no_obstacles]",
            "value": 497.9125583010057,
            "unit": "iter/sec",
            "range": "stddev: 0.00009146150925875458",
            "extra": "mean: 2.008384772242408 msec\nrounds: 562"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.Bounded]",
            "value": 111.97385418680234,
            "unit": "iter/sec",
            "range": "stddev: 0.00014996612757076062",
            "extra": "mean: 8.930656243481025 msec\nrounds: 115"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[franka-CartesianSpeedMode.TimeOptimal]",
            "value": 133.33857942203826,
            "unit": "iter/sec",
            "range": "stddev: 0.0001363933809575142",
            "extra": "mean: 7.499704919120501 msec\nrounds: 136"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[kinova]",
            "value": 2009.4132448710761,
            "unit": "iter/sec",
            "range": "stddev: 0.000014346037956973464",
            "extra": "mean: 497.65771304257527 usec\nrounds: 2070"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[dual-with_obstacles]",
            "value": 534.2045469474598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009723879564299315",
            "extra": "mean: 1.8719421347387974 msec\nrounds: 616"
          },
          {
            "name": "benchmarks/test_benchmark_scene.py::test_benchmark_has_collisions[so101-with_obstacles]",
            "value": 122.92620249740789,
            "unit": "iter/sec",
            "range": "stddev: 0.006297470173724979",
            "extra": "mean: 8.13496211290743 msec\nrounds: 372"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.Bounded]",
            "value": 78.16368959397289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021559180496272574",
            "extra": "mean: 12.793664234564341 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[stretch-CartesianSpeedMode.TimeOptimal]",
            "value": 91.74510298751356,
            "unit": "iter/sec",
            "range": "stddev: 0.00018594823777221865",
            "extra": "mean: 10.899764319149538 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[ur5]",
            "value": 2851.339751186717,
            "unit": "iter/sec",
            "range": "stddev: 0.000009980155976231413",
            "extra": "mean: 350.71232727836235 usec\nrounds: 2918"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.Bounded]",
            "value": 12.763047501222282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006629465805182734",
            "extra": "mean: 78.35119315384767 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_benchmark_cartesian_planning.py::test_benchmark_cartesian_planning[tiago_pro-CartesianSpeedMode.TimeOptimal]",
            "value": 16.166098268554165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005432112344334086",
            "extra": "mean: 61.85784494117369 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[franka]",
            "value": 2374.7268023947977,
            "unit": "iter/sec",
            "range": "stddev: 0.000011364762260066517",
            "extra": "mean: 421.1010710754383 usec\nrounds: 2434"
          },
          {
            "name": "benchmarks/test_benchmark_oink.py::test_benchmark_oink_solve[dual]",
            "value": 1527.9841607626672,
            "unit": "iter/sec",
            "range": "stddev: 0.00008018149470553291",
            "extra": "mean: 654.4570458772735 usec\nrounds: 1613"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[so101]",
            "value": 4.221729163846242,
            "unit": "iter/sec",
            "range": "stddev: 0.15938408104883026",
            "extra": "mean: 236.8697662000045 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[so101]",
            "value": 9.395594050453635,
            "unit": "iter/sec",
            "range": "stddev: 0.07927844006339174",
            "extra": "mean: 106.43286572728398 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[kinova]",
            "value": 2.9266960290998307,
            "unit": "iter/sec",
            "range": "stddev: 0.18548569451765684",
            "extra": "mean: 341.6822211999829 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[kinova]",
            "value": 6.727000112854119,
            "unit": "iter/sec",
            "range": "stddev: 0.07245530007014948",
            "extra": "mean: 148.65467269566045 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[ur5]",
            "value": 0.40388347714575995,
            "unit": "iter/sec",
            "range": "stddev: 4.244964227681218",
            "extra": "mean: 2.4759616488076928 sec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[ur5]",
            "value": 6.3512022034094135,
            "unit": "iter/sec",
            "range": "stddev: 0.31604352948547154",
            "extra": "mean: 157.45050589999892 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[franka]",
            "value": 9.472398920658225,
            "unit": "iter/sec",
            "range": "stddev: 0.044161294842676634",
            "extra": "mean: 105.56987816667156 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[franka]",
            "value": 36.9642640686636,
            "unit": "iter/sec",
            "range": "stddev: 0.005946374448525706",
            "extra": "mean: 27.053155938460804 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[dual]",
            "value": 0.46230130252801427,
            "unit": "iter/sec",
            "range": "stddev: 4.1873806699899765",
            "extra": "mean: 2.163091461200031 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[dual]",
            "value": 17.52911919751357,
            "unit": "iter/sec",
            "range": "stddev: 0.013292740673873926",
            "extra": "mean: 57.04793200002003 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt[tiago_pro]",
            "value": 0.18016675779567953,
            "unit": "iter/sec",
            "range": "stddev: 5.3883476691538785",
            "extra": "mean: 5.550413473799995 sec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_benchmark_rrt.py::test_benchmark_rrt_connect[tiago_pro]",
            "value": 5.381209720882038,
            "unit": "iter/sec",
            "range": "stddev: 0.08304683108243566",
            "extra": "mean: 185.8318206999911 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}
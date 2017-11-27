/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
    Papa.parse("../data/total_voter_party_results.csv", {
        download: true,
        complete: function(results) {
            createGraph(results.data);
        }
    });
}

//create graph function for total voter party charts//
function createGraph(data) {
    var id = [];
    var state = [];
    var party = [];
    var name = [];
    var district = [];
    var total_votes = ["Total Votes"];
    var votes_with_party = ["Total Votes with Party"];
    var party_votes = ["Party Vote Percentage"];

//dem values//
    var dem_votes_with_party =['Democrat Votes with Party'];
    var dem_party_votes = ['Democrat Party Vote Percentage'];

//republican values//
    var rep_votes_with_party =['Reoublican Votes with Party'];
    var rep_party_votes = ['Republican Party Vote Percentage'];


//only return NJ Voter data
    for (var i = 1; i < data.length; i++) {
        if (data[i][4] === "NJ")
        {
            name.push(data[i][2]);
            id.push(data[i][0]);
            district.push(data[i][5]);
            party.push((data)[i][3]);
            total_votes.push(data[i][6]);
            votes_with_party.push(data[i][7]);
            party_votes.push(data[i][8])

        }
    }


    //functions for democrats//
    for (var j = 1; j < data.length; j++) {
        if (data[j][4] === "NJ" && data[j][3]==='D')
        {
            dem_votes_with_party.push(data[j][7]);
            dem_party_votes.push(data[j][8])

        }
    }

    //function for republicans//
    for (var k = 1; k < data.length; k++) {
        if (data[k][4] === "NJ" && data[k][3]==='R')
        {
            rep_votes_with_party.push(data[k][7]);
            rep_party_votes.push(data[k][8])
        }
    }


//Console output for testing/
    console.log(name);
    console.log(id);
    console.log(total_votes);
    console.log(votes_with_party);
    console.log(party_votes);

//console output for testing dem/repub values//
    console.log(rep_party_votes);
    console.log(rep_votes_with_party);
    console.log(dem_party_votes);
    console.log(dem_votes_with_party);




//total party votes via Vote ID//
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                total_votes
            ],
            type: 'bar'
        },

        axis: {

            x: {
                label: {
                    text:'VOTE ID',
                    position: 'outer center'
                },
                type: 'category',
                categories: id
            }

        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });

   //total votes for rep with party via name//

    var chart3 = c3.generate({
        bindto: '#chart3',

        data: {
            columns: [
                votes_with_party
            ],
            type: 'bar'
        },

        axis: {
            x: {

                type: 'category',
                categories: name
            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });


    //total votes for rep with party via district//

    var chart3_1 = c3.generate({
        bindto: '#chart3_1',

        data: {
            columns: [
                votes_with_party
            ],
            type: 'bar'
        },

        axis: {
            x: {

                label: {
                    text:'District',
                    position: 'outer center'
                },

                type: 'category',
                categories: district

            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });




    //total party votes for rep//

    var chart4 = c3.generate({
        bindto: '#chart4',

        data: {
            columns: [
                votes_with_party
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: party,
                label: party

            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });

//total party votes percentage for rep via district//

    var chart5 = c3.generate({
        bindto: '#chart5',

        data: {
            columns: [
                party_votes
            ],

            groups: [
                party
                ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: party

            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });

//total party vote count//
    var chart6 = c3.generate({
        bindto: '#chart6',

        data: {
            columns: [
                rep_votes_with_party,
                dem_votes_with_party
            ],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });

//total party votes percentage//
    var chart7 = c3.generate({
        bindto: '#chart7',

        data: {
            columns: [
                rep_party_votes,
                dem_party_votes
            ],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });


}

/////missed data////

function parseData2(createGraph2) {
    Papa.parse("../data/votetype_missed.csv", {
        download: true,
        complete: function(results) {
            createGraph2(results.data);
        }
    });
}

function createGraph2(data) {
    var id = [];
    var state = [];
    var party = [];
    var name = [];
    var district = [];
    var total_votes = ["Total Votes"];
    var missed_votes = ["Missed Votes"];

    //NJ Results//


    for (var i = 1; i < data.length; i++) {
        if (data[i][8] === "NJ")
        {
            name.push(data[i][6]);
            id.push(data[i][4]);
            district.push(data[i][9]);
            party.push((data)[i][7]);
            total_votes.push(data[i][10]);
            missed_votes.push(data[i][11])

        }
    }

//Console output/
    console.log(missed_votes);
    console.log(name);
    console.log(id);
    console.log(total_votes);






//missed votes via representatives///

    var chart2_2 = c3.generate({
        bindto: '#chart2-2',

        data: {
            columns: [
                total_votes
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: name

            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });

    //missed votes via representative name//

    var chart2_3 = c3.generate({
        bindto: '#chart2-3',

        data: {
            columns: [
                missed_votes
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: name

            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });

    //missed votes via for party//

    var chart2_4 = c3.generate({
        bindto: '#chart2-4',

        data: {
            columns: [
                missed_votes
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: party,
                label: party

            }
        },

        zoom: {
            enabled: true
        },

        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }


    });



}



parseData(createGraph);
parseData2(createGraph2);



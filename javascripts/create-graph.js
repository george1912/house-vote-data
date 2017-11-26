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

function createGraph(data) {
    var state = [];
    var party = [];
    var total_votes = ["Total Votes"];
    var votes_with_party = ["Total Votes with Party"];
    var party_votes = ["Party Votes"]

    for (var i = 1; i < data.length; i++) {
        state.push(data[i][4]);
        party.push((data)[i][3]);
        total_votes.push(data[i][6]);
        votes_with_party.push(data[i][7]);
        party_votes.push(data[i][8])
    }

    console.log(state);
    console.log(total_votes);
    console.log(votes_with_party);
    console.log(party_votes);

 //chart 1//



//vote with party graph- chart 3//

    var chart = c3.generate({
        bindto: '#chart',

        data: {
            columns: [
                total_votes
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: state

            }
        },
        zoom: {
            enabled: true
        }

        //testcode//
    });

//chart 2///

    var chart2 = c3.generate({
        bindto: '#chart2',

        data: {
            columns: [
                total_votes
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: state

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

    //chart 3 binding//

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
                categories: state

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

    //chart 4 binding//

    var chart4 = c3.generate({
        bindto: '#chart4',

        data: {
            columns: [
                party_votes
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: state,
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

//chart 5 binding//

    var chart5 = c3.generate({
        bindto: '#chart5',

        data: {
            columns: [
                party_votes
            ],
            type: 'bar'
        },

        axis: {
            x: {
                type: 'category',
                categories: state

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


    var chart5 = c3.generate({
        bindto: '#chart5',

        data: {
            // iris data from R
            columns: [
                votes_with_party,
                total_votes
            ],
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });




}

/////chat2 bar////



parseData(createGraph);



///////////////////

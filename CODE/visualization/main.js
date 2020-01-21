
//Color Map

colorMap = {
   Anarchism: '#ff4500',
   canada: '#9a0000',
   Catholicism: '#ff5d00',
   college: '#EE4422',
   communism: '#550000',
   Conservative: '#ffca00',
   democrats: '#0079d3',
   environment: '#ffb000',
   Full_news: '#ff8717',
   geopolitics: '#C3CC00',
   Liberal: '#497200',
   Libertarian: '#CF9700',
   moderatepolitics: '#0dd3bb',
   neutralnews: '#00a6a5',
   NeutralPolitics: '#00A78B',
   news:  '#D34400',
   PoliticalDiscussion: '#84dede',
   politics: '#24a0ed',
   progressive: '#0048a6',
   qualitynews: '#cd6ae8',
   Republican: '#FF0000',
   socialism: '#6ed1ff',
   technology: '#83a6de',
   TheNewRight: '#394e85',
   The_Donald: '#D8673B',
   TrueReddit: '#00765b',
   unitedkingdom: '#004b2b',
   worldevents: '#2fff00',
   worldnews: '#e7174a',
   worldpolitics: '#e7174a'
}

legendlocationMap_text = {
    Anarchism : "translate(10,40)",
    canada: "translate(135,40)",
    Catholicism: "translate(230,40)",
    college: "translate(355,40)",
    communism: "translate(448,40)",
    Conservative: "translate(570,40)",
    democrats: "translate(700,40)",
    environment: "translate(810,40)",
    Full_news: "translate(930,40)",
    geopolitics: "translate(1045,40)",
    Liberal: "translate(1160,40)",
    Libertarian: "translate(1250,40)",
    moderatepolitics: "translate(1355,40)",
    neutralnews: "translate(1505,40)",
    NeutralPolitics: "translate(1635,40)",
    news: "translate(28,110)",
    PoliticalDiscussion: "translate(100,110)",
    politics: "translate(243,110)",
    progressive: "translate(340,110)",
    qualitynews: "translate(450,110)",
    Republican: "translate(572,110)",
    socialism: "translate(700,110)",
    technology: "translate(814,110)",
    TheNewRight: "translate(917,110)",
    The_Donald: "translate(1038,110)",
    TrueReddit: "translate(1145,110)",
    unitedkingdom: "translate(1240,110)",
    worldevents: "translate(1367,110)",
    worldnews: "translate(1510,110)",
    worldpolitics: "translate(1640,110)"
}

legendlocationMap_square = {
    Anarchism : "translate(30,50)",
    canada: "translate(142,50)",
    Catholicism: "translate(254,50)",
    college: "translate(362,50)",
    communism: "translate(472,50)",
    Conservative: "translate(595,50)",
    democrats: "translate(718,50)",
    environment: "translate(835,50)",
    Full_news: "translate(945,50)",
    geopolitics: "translate(1065,50)",
    Liberal: "translate(1167,50)",
    Libertarian: "translate(1267,50)",
    moderatepolitics: "translate(1395,50)",
    neutralnews: "translate(1532,50)",
    NeutralPolitics: "translate(1670,50)",
    news: "translate(30,120)",
    PoliticalDiscussion: "translate(142,120)",
    politics: "translate(254,120)",
    progressive: "translate(362,120)",
    qualitynews: "translate(472,120)",
    Republican: "translate(595,120)",
    socialism: "translate(718,120)",
    technology: "translate(835,120)",
    TheNewRight: "translate(945,120)",
    The_Donald: "translate(1065,120)",
    TrueReddit: "translate(1167,120)",
    unitedkingdom: "translate(1267,120)",
    worldevents: "translate(1395,120)",
    worldnews: "translate(1532,120)",
    worldpolitics: "translate(1670,120)"
}

subreddit_names=["Anarchism","canada","Catholicism","college","communism","Conservative","democrats","environment","Full_news","geopolitics","Liberal","Libertarian",
                "moderatepolitics","neutralnews","NeutralPolitics","news","PoliticalDiscussion","politics","progressive","qualitynews","Republican","socialism","technology",
                "TheNewRight","The_Donald","TrueReddit","unitedkingdom","worldevents","worldnews","worldpolitics"];

clickMap = {
   Anarchism: 0,
   canada: 0,
   Catholicism: 0,
   college: 0,
   communism: 0,
   Conservative: 0,
   democrats: 0,
   environment: 0,
   Full_news: 0,
   geopolitics: 0,
   Liberal: 0,
   Libertarian: 0,
   moderatepolitics: 0,
   neutralnews: 0,
   NeutralPolitics: 0,
   news:  0,
   PoliticalDiscussion: 0,
   politics: 0,
   progressive: 0,
   qualitynews: 0,
   Republican: 0,
   socialism: 0,
   technology: 0,
   TheNewRight: 0,
   The_Donald: 0,
   TrueReddit: 0,
   unitedkingdom: 0,
   worldevents: 0,
   worldnews: 0,
   worldpolitics: 0
}


//ScatterPlot

        // Global functions called when select elements changed
        function onXScaleChanged() {
            var select = d3.select('#xScaleSelect').node();
            // Get current value of select element, save to global chartScales
            chartScales.x = select.options[select.selectedIndex].value;
            // Update chart
            scatter_updateChart();
        }

        function onYScaleChanged() {
            var select = d3.select('#yScaleSelect').node();
            // Get current value of select element, save to global chartScales
            chartScales.y = select.options[select.selectedIndex].value;
            // Update chart
            scatter_updateChart();
        }

        topicMap = {Parkland: 0 , NorthKorea: 1 , Florence: 2, Shutdown: 3, Kavanaugh: 4 }

        var divFirst = d3.select("#FirstRow");

        var zoom = d3.zoom()
                .on("zoom",zoomFunction);

        var svg = divFirst.select('svg#scatterplot');

        // Get layout parameters
        var svgWidth = +svg.attr('width');
        var svgHeight = +svg.attr('height');

        var padding = {t: 40, r: 40, b: 40, l: 70};

        // Compute chart dimensions
        var chartWidth = svgWidth - padding.l - padding.r;
        var chartHeight = svgHeight - padding.t - padding.b;


        // Create a group element for appending chart elements
        var chartG = svg.append('g')
            .attr('transform', 'translate('+[padding.l, padding.t]+')');

        // Create groups for the x- and y-axes
        var xAxisG = chartG.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate('+[0, chartHeight]+')');

        var yAxisG = chartG.append('g')
            .attr('class', 'y axis');

        svg.call(zoom);


//Word Cloud
        WordCloudDiv = divFirst.select('#wordcloud');            

//Toolbar
       svgToolbar = d3.select("#toolbar")
                        .append("svg")
                        .attr("width",1850)
                        .attr("height",160)
                        .attr("class","svgTB");

//MetaInfo
        mouseclick = 0;
        subreddit_info=null;
        svgMeta = d3.select("#metainfo");

        svgMeta.append('text')
                .attr("transform","translate(50,50)")
                .attr("font-weight","bold")
                .attr("font-size",20)
                .text("Topic Name: ");

        svgMeta.append('text')
                .attr("transform","translate(50,80)")
                .attr("font-weight","bold")
                .attr("font-size",20)
                .text("Subreddit Name: ");

        svgMeta.append('text')
                .attr("transform","translate(50,110)")
                .attr("font-weight","bold")
                .attr("font-size",20)
                .text("Subscribers: ");

         svgMeta.append('text')
                .attr("transform","translate(50,140)")
                .attr("font-weight","bold")
                .attr("font-size",20)
                .text("(Topic) Submissions: ");

        svgMeta.append('text')
                .attr("transform","translate(50,170)")
                .attr("font-weight","bold")
                .attr("font-size",20)
                .text("(Topic) Comments: ");


        svgMeta.append('text')
                .attr("id","topic_label")
                .attr("transform","translate(240,50)")
                .attr("font-size",20);

        svgMeta.append('text')
                .attr("id","subreddit_label")
                .attr("transform","translate(240,80)")
                .attr("font-size",20);

        svgMeta.append('text')
                .attr("id","subscriber_label")
                .attr("transform","translate(240,110)")
                .attr("font-size",20);

        svgMeta.append('text')
                .attr("id","submissions_label")
                .attr("transform","translate(240,140)")
                .attr("font-size",20);

        svgMeta.append('text')
                .attr("id","comments_label")
                .attr("transform","translate(240,170)")
                .attr("font-size",20);

//Clustering

    var widthCluster = 1850, heightCluster = 350;
    
    
    svgClustering = d3.select("#ZeroRow")
                      .append("svg")
                      .attr("width", widthCluster)
                      .attr("height", heightCluster);

//Check Random Mouse Click

function mouseRandomClick(){
    //console.log("Click Check");
    if(mouseclick==1){
        mouseclick=0;

        svgMeta.select('#topic_label')
        .text('');

        svgMeta.select('#subreddit_label')
            .text('');

        svgMeta.select('#subscriber_label')
            .text('');

        svgMeta.select('#submissions_label')
            .text('');

        svgMeta.select('#comments_label')
            .text('');

        d3.selectAll('.'+subreddit_info.subreddit_name)
            .attr("stroke","")
            .attr("fill",colorMap[subreddit_info.subreddit_name])
            .attr("height","30px")
            .attr("width","30px")
            .attr("stroke-width","4px");

        d3.select('#hintText')
            .text('');
    }
}

bodyTag = d3.select('body')
            .on('dblclick', function(){
                //console.log("tesst");
                mouseRandomClick();
            })

d3.csv('./data.csv',
    // Load data and use this function to process each row
    function(row) {
        return {
            'topic_name' : row['topic_name'],
            'subreddit_id' : +row['subreddit_id'],
            'subreddit_name' : row['subreddit_name'],
            'avg_pos' : +row['avg_pos'],
            'avg_neg' : +row['avg_neg'],
            'avg_neu' : +row['avg_neu'],
            'avg_compound' : +row['avg_compound'],
            'subjectivity': +row['subjectivity'],
            'subscribers_count' : +row['subscribers_count'],
            'comments_count' : +row['comments_count'],
            'submissions_count' : +row['submissions_count'],
            'cluster' : +row['cluster'],
            'cluster_family' : +row['cluster_family']
        };
    },
    function(error, dataset) {
        // Log and return from an error
        if(error) {
            console.error('Error while loading ./letter_freq.csv dataset.');
            console.error(error);
            return;
        }

        subreddits = dataset;
        // Create global object called chartScales to keep state
        subredditsByTopic = d3.nest()
                              .key(function(d) { return d.topic_name; })
                              .entries(subreddits);
        
        columns=dataset.columns;

        onTopicChange();
        
    });

function mouseclicked(d){

                        
    var source = "WordCloud/"+d.topic_name+"/"+d.subreddit_name+".png"
    

    if(urlExists(source)){
        console.log(true);
        WordCloudDiv.attr("src",source)
                .attr("style","opacity="+1);
    }
    else
    {
       source ="ImageSubstitutes/CloudErrorMessage.png";
       WordCloudDiv.attr("src",source)
                .attr("style","opacity="+1);
    }

    sentenTree(d);
    
    
    d3.select('#mouseHint')
        .attr('transform', 'translate(1200,20)')
        .select('#hintText')
        .text('(Use Double-Click to cancel Subreddit selection.)')
        .attr('transform', 'translate(0,20)')
        .attr('font-size','13px');


    svgMeta.select('#topic_label')
            .text(function(){
                //console.log(d.topic_name);
                return d.topic_name;
            });

    svgMeta.select('#subreddit_label')
            .text(function(){
                return d.subreddit_name;
            });

          //  console.log(d);

    d3.selectAll("."+d.subreddit_name)
        .attr("stroke","black")
        .attr("stroke-width","4px");


    if(mouseclick==1 && d.subreddit_name!=subreddit_info.subreddit_name){
        d3.selectAll('.'+subreddit_info.subreddit_name)
            .attr("stroke","")
            .attr("fill",colorMap[d.subreddit_name])
            .attr("height","30px")
            .attr("width","30px")
            .attr("stroke-width","4px");

    }


    mouseclick=1;
    subreddit_info=d;
}

function mousehoverIn(d){

    svgMeta.select('#topic_label')
            .text(function(){
                //console.log(d.topic_name);
                return d.topic_name;
            });

    svgMeta.select('#subreddit_label')
            .text(function(){
                return d.subreddit_name;
            });

    svgMeta.select('#subscriber_label')
            .text(function(){
                //console.log(d.topic_name);
                return d.subscribers_count;
            });

    svgMeta.select('#submissions_label')
            .text(function(){
                return d.submissions_count;
            });

    svgMeta.select('#comments_label')
            .text(function(){
                return d.comments_count;
            });




     d3.selectAll("."+d.subreddit_name)
        .attr("stroke","black")
        .attr("fill","#f6db2f")
        .attr("height","35px")
        .attr("width","35px")
        .attr("stroke-width","4px");
}

function mousehoverOut(d){

    if(mouseclick!=1){

        svgMeta.select('#topic_label')
            .text('');

        svgMeta.select('#subreddit_label')
            .text('');

        svgMeta.select('#submissions_label')
            .text('');

        svgMeta.select('#subscriber_label')
            .text('');

        svgMeta.select('#comments_label')
            .text('');

        d3.selectAll("."+d.subreddit_name)
            .attr("stroke","")
            .attr("fill",colorMap[d.subreddit_name])
            .attr("height","30px")
            .attr("width","30px")
            .attr("stroke-width","4px");
    }


    if(mouseclick==1  && subreddit_info.subreddit_name!=d.subreddit_name){
        d3.selectAll("."+d.subreddit_name)
            .attr("stroke","")
            .attr("fill",colorMap[d.subreddit_name])
            .attr("height","30px")
            .attr("width","30px")
            .attr("stroke-width","4px");

        svgMeta.select('#topic_label')
            .text(subreddit_info.topic_name);

        svgMeta.select('#subreddit_label')
            .text(subreddit_info.subreddit_name);

        svgMeta.select('#submissions_label')
            .text(subreddit_info.submissions_count);

        svgMeta.select('#subscriber_label')
            .text(subreddit_info.subscribers_count);

        svgMeta.select('#comments_label')
            .text(subreddit_info.comments_count);


    }
}

function scatter_updateChart() {
    
    // Update the scales based on new data attributes
	yScale.domain(domainMap[chartScales.y]).nice();
	xScale.domain(domainMap[chartScales.x]).nice();

	//xAxisG.call(d3.axisBottom(xScale));
	//yAxisG.call(d3.axisLeft(yScale));

    xAxis = d3.axisBottom(xScale);
    yAxis = d3.axisLeft(yScale);

	xAxisG.transition()
            .duration(800)
            .call(xAxis);
	
	yAxisG.transition()
            .duration(800)
            .call(yAxis);

	dots = chartG.selectAll('.dot')
                .data(data);

    dotsEnter = dots.enter()
                    .append('g')
                    .attr('class', 'dot')
                    .attr('transform', function(d) {
                        var tx = xScale(d[chartScales.x]);
                        var ty = yScale(d[chartScales.y]);
                        return 'translate('+[tx, ty]+')';
                        })
                    .attr('fill',function(d){
                        return colorMap[d.subreddit_name];
                    })
                    .on('click', function(d){
                        mouseclicked(d);
                    })
                    .on('mouseover', function(d){
                        mousehoverIn(d);
                    })
                    .on('mouseout',function(d){
                        mousehoverOut(d);
                    });
    
	dotsEnter.append('circle')
             .attr('class',function(d){
                            return d.subreddit_name;
                    })
             .attr('r', 10);

    dots.merge(dotsEnter)
        .transition()
        .duration(800)
        .attr('transform', function(d) {
            var tx = xScale(d[chartScales.x]);
            var ty = yScale(d[chartScales.y]);
            return 'translate('+[tx, ty]+')';
        });

    dotsEnter.append('text')
                .attr('y', -10)
                .text(function(d) {
                    return d.subreddit_name;
                });
}

function zoomFunction(){

      // create new scale ojects based on event
      var new_xScale = d3.event.transform.rescaleX(xScale)
      var new_yScale = d3.event.transform.rescaleY(yScale)

      // update axes
      xAxisG.call(xAxis.scale(new_xScale));
      yAxisG.call(yAxis.scale(new_yScale));

      // update circles

      dotsEnter.attr('transform', function(d) {
            var tx = new_xScale(d[chartScales.x]);
            var ty = new_yScale(d[chartScales.y]);
            return 'translate('+[tx, ty]+')';
        });

      dots.attr("transform", function(d){
            var tx = new_xScale(d[chartScales.x]);
            var ty = new_yScale(d[chartScales.y]);
            return 'translate('+[tx, ty]+')';
      });
}

function build_legend(){

    
    svgTB = d3.select('.svgTB');
    
    legendGraphic = svgToolbar.append("g")
                            .attr("id", "legendSubreddit")
                            .attr("transform", "translate(5,0)")
                            .attr("fill", "black")
                            .style("fill-opacity", "1");
    
    Lnames = legendGraphic.selectAll('.lnames')
                          .data(data);

    Lnames.enter()
          .append('text')
          .text(function(d){
                    return d.subreddit_name;
           })
          .attr("transform", function(d){
                    return legendlocationMap_text[d.subreddit_name];
           })
          .on("click", function(d){
                    mouseclicked(d);
           })
          .on("mouseover", function(d){
                    mousehoverIn(d); 
           })
          .on("mouseout", function(d){
                    mousehoverOut(d);
          });

    Lnames.enter()
          .append('rect')
          .attr("fill", function(d){  
                    return colorMap[d.subreddit_name];
              })
          .attr("width",30)

          .attr("height",30)
          .attr("class", function(d)
                  {
                    return d.subreddit_name; 
                  })
          .attr("rx",5)
          .attr("ry",5)
          .attr("transform",function(d,i){
                    return legendlocationMap_square[d.subreddit_name];
                })
          .on("click", function(d){
                    mouseclicked(d);
           })
          .on("mouseover", function(d){
                    mousehoverIn(d); 
           })
          .on("mouseout", function(d){
                    mousehoverOut(d);
          });

    svgTB.exit().remove();
}

function onTopicChange(){
    
    var topic = d3.select('#TopicSelected').node();
    topic = topic.options[topic.selectedIndex].value;

    //console.log(topic);

    data = subredditsByTopic[topicMap[topic]].values;

    xScale = d3.scaleLinear()
                .range([0, chartWidth]);

    yScale = d3.scaleLinear()
                .range([chartHeight, 0]);

    domainMap = {};

    console.log(data);

    console.log(data.subreddit_name);

    columns.forEach(function(column) {
        domainMap[column] = d3.extent(data, function(data_element){
        return data_element[column];
        });
    });

    chartScales = {x: 'avg_compound', y: 'avg_pos'};

    build_legend();
    scatter_updateChart();
    clusteringHLDA();  
}

function sentenTree(d){

      google.charts.load('current', {packages:['wordtree']});
      google.charts.setOnLoadCallback(drawChart);
      //console.log(d);
      text_data = [];
      split_text = [];
      keywords = {  Florence: 'florence', 
                    Kavanaugh: 'kavanaugh',
                    NorthKorea: 'trump',
                    Shutdown: 'shutdown'
                }
      function readTextFile(file)
      {
         var rawFile = new XMLHttpRequest();
         rawFile.open("GET", file, false);
         rawFile.onreadystatechange = function ()
         {
             if(rawFile.readyState === 4)
             {
                 if(rawFile.status === 200 || rawFile.status == 0)
                 {
                     var allText = rawFile.responseText;
                     split_text = allText.split('\n')
                     for (i = 0; i <= split_text.length-1; i++){
                         text_data.push([split_text[i]])
                     }
                 }
             }
         }
         rawFile.send(null);
      }

      var source = "SentenTree/"+d.topic_name+"/"+d.subreddit_name+".txt";
      //console.log(source);
      readTextFile(source);
      //console.log(text_data);
      
      function drawChart() {
        var data = google.visualization.arrayToDataTable(
          text_data
        );

        //console.log(keywords[d.topic_name]);

        var options = {
          colors: colorMap[d.subreddit_name],
          backgroundColor: '#FEFBF4',
          fontName: 'Arial',
          wordtree: {
                  format: 'implicit',
                  type: 'double',
                  word: keywords[d.topic_name]
                  }
        };

        var chart = new google.visualization.WordTree(document.getElementById('sententree'));
        chart.draw(data, options);
      }
}

function clusteringHLDA(){
    
            var radius = 15;
            var centerScale = d3.scalePoint().padding(1).range([0, widthCluster]);
            var forceStrength = 0.05;

            var simulation = d3.forceSimulation()
                    .force("collide",d3.forceCollide( function(d){
                        return d.r + 8 }).iterations(1) 
                    )
                    .force("charge", d3.forceManyBody())
                    .force("y", d3.forceY().y(heightCluster / 2))
                    .force("x", d3.forceX().x(widthCluster / 2))
            
            

            function hideTitles() {
                    svgClustering.selectAll('.title').remove();
            }

            
            d3.selectAll("#cluster")
                .attr("class","button");

            d3.selectAll("#cluster_family")
                .attr("class","button");

            hideTitles();

            d3.select("#all")
                .attr("class","button active");
            
            
            data.forEach(function(d){
                    d.r = radius;
                    d.x = widthCluster / 2;
                    d.y = heightCluster / 2;
                  })

                    
            circles = svgClustering.selectAll("circle")
                                    .data(data, function(d){ return d.subreddit_id ;});
              
            circlesEnter = circles.enter()
                                        .append("circle")
                                            .attr("class",function(d){
                                                return d.subreddit_name;
                                            })
                                            .attr("r", function(d, i){ return d.r; })
                                            .attr("cx", function(d, i){ return 175 + 25 * i + 2 * i ** 2; })
                                                    .attr("cy", function(d, i){ return 250; })
                                            .style("fill", function(d, i){ 
                                                        //console.log(d);
                                                        return colorMap[d.subreddit_name]; 
                                                    })
                                            .style("stroke", function(d, i){ 
                                                        return colorMap[d.subreddit_name]; 
                                                    })
                                            .style("stroke-width", 10)
                                            .style("pointer-events", "all")
                                            .on("click", function(d){
                                                    mouseclicked(d);
                                            })
                                            .on("mouseover",function(d){
                                                    mousehoverIn(d);
                                            })
                                            .on("mouseout", function(d){
                                                    mousehoverOut(d);
                                            })
                                            .call(d3.drag()
                                                    .on("start", dragstarted)
                                                    .on("drag", dragged)
                                                    .on("end", dragended));

                    circles = circles.merge(circlesEnter)
      
            function ticked() {

                circles
                    .attr("cx", function(d){ return d.x; })
                    .attr("cy", function(d){ return d.y; });
            }   

            simulation.nodes(data)
                      .on("tick", ticked);

            function dragstarted(d,i) {
                    //console.log("dragstarted " + i)
                    if (!d3.event.active) simulation.alpha(1).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                  }

            function dragged(d,i) {
                    //console.log("dragged " + i)
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                  }

            function dragended(d,i) {
                    //console.log("dragended " + i)
                    if (!d3.event.active) simulation.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                    var me = d3.select(this)
                    //console.log(me.classed("selected"))
                    me.classed("selected", !me.classed("selected"))
                    
                    d3.selectAll("circle")
                      .style("fill", function(d, i){ return colorMap[d.subreddit_name]; })
                    
                    d3.selectAll("circle.selected")
                      .style("fill", "none")
                    
                  }

            function groupBubbles() {
                hideTitles();

                // @v4 Reset the 'x' force to draw the bubbles to the center.
                simulation.force('x', d3.forceX().strength(forceStrength).x(w / 2));

                // @v4 We can reset the alpha value and restart the simulation
                simulation.alpha(1).restart();
              }
              
            function splitBubbles(byVar) {
                
                centerScale.domain(data.map(function(d){ return d[byVar]; }));
                
                if(byVar == "all"){
                  hideTitles()
                } else {
                    showTitles(byVar, centerScale);
                }
                
                // @v4 Reset the 'x' force to draw the bubbles to their year centers
                simulation.force('x', d3.forceX().strength(forceStrength).x(function(d){ 
                    return centerScale(d[byVar]);
                }));

                // @v4 We can reset the alpha value and restart the simulation
                simulation.alpha(2).restart();
            }
          
            function showTitles(byVar, scale) {
                // Another way to do this would be to create
                // the year texts once and then just hide them.
                var titles = svgClustering.selectAll('.title')
                                          .data(scale.domain());
                
                titles.enter()
                        .append('text')
                        .attr('class', 'title')
                        .merge(titles)
                        .attr('x', function (d) { return scale(d); })
                        .attr('y', 40)
                        .attr('text-anchor', 'middle')
                        .text(function (d,i) { if(byVar=="cluster") 
                                                return 'Cluster ' + (i+1); 
                                             else
                                                return 'Cluster Family ' + (i+1);
                                            });
                
                titles.exit().remove(); 
            }
                        
            function setupButtons() {
                        d3.selectAll('.button')
                          .on('click', function () {
                            
                            // Remove active class from all buttons
                            d3.selectAll('.button').classed('active', false);
                            // Find the button just clicked
                            var button = d3.select(this);

                            // Set it as the active button
                            button.classed('active', true);

                            // Get the id of the button
                            var buttonId = button.attr('id');

                              console.log(buttonId)
                            // Toggle the bubble chart based on
                            // the currently clicked button.
                            splitBubbles(buttonId);
                          });
            }
              
                
                    setupButtons()                    
}

function urlExists(testUrl) {
    var http = jQuery.ajax({
        type:"HEAD", //Not get
        url: testUrl,
        async: false
    })
    return http.status!=404;
}
 <div class="legend">

    <% _.each(repo.get('gitHUDMeta').contributors, function(contributor, i) { %>
      <p style="color: <%= repo.get('gitHUDMeta').donutData.color %>;"><%= contributor.login %> <%= repo.get('gitHUDMeta').commits[i] %></p>
    <% }) %>
  </div>


  //each loop for contributors

  <h6><span class="muted-text">Top Contributer: </span><%= repo.get('gitHUDMeta').tickerData.topCommiter.allTime.user %></h6>
        <h3>misc data:</h3>
            <% _.each(repo.get('gitHUDMeta').tickerData.allCommiters.allTime, function(x){ %>
                <span><%=  x.user %>, <%= x.commits  %></span>
            <% }) %>


//filler/layout stuff

<div class="donut-top-five">
                    <span class="darkened-text">15 commits</span><span class="top-five-user">Jhendley25</span><span class="ss-piechart"></span>
                </div>
                <div class="donut-top-five">
                    <span class="darkened-text">15 commits</span><span class="top-five-user">Jhendley25</span><span class="ss-piechart"></span>
                </div>

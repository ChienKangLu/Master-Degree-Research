# Backward Heuristic and Satisfaction-based Multiobjectives Optimization for A* Search on Trip Planning
This is my Master's Thesis. I got master’s degree in **information management** from the National Taiwan University of Science and Technology on August 20, 2018.
 
## Develop tools and techniques
+ Use **TypeScript** to implement all algorithms in this paper
+ Use **Node.js** as Server
+ Database is **Mongodb**
+ Visual Studio Code

## Abstract
Trip planning that may integrate diverse information sources to meet travelers’ multiple goals or preferences has become important for intelligent transportation services. Algorithm A* that was a popular approach for trip planning, but has not been well addressed for multiobjectives issue as well as search efficiency. In this paper, heuristic estimate and multiobjectives optimization for A* search on trip planning are proposed to handle the issues. First, a backward algorithm for estimating the heuristics for A* search was proposed to reduce the search complexity and speed up the search. The Backward heuristic is obtained from the expectation of reward. Experimental show that, the backward heuristic may reduce the number of nodes by 200 times and increase search speed by 300 times at the depth of 7, and the total attraction of the obtained trip is very close to the optimal one. To deal with the issue of multiple objectives, such trip factors as attraction to be maximized need first be converted into costs for minimization according to the satisfaction conditions predefined by the user. All the costs of trip factors, including those for time, distance, attraction and so on, could then be accumulated individually and made use of to meet some criteria, such as the time constraints, while minimized jointly to find the eclectic trips fulfilling traveler’s multiple goals. In the experiments of multiobjective planning it could be shown that, the tradeoff among multiple factors may be achieved, and the proposed optimization may reduce overall dissatisfaction effectively. Furthermore, the proposed scheme is capable of taking the exceptions in trip planning such as traffic jam into account. The extra trip factor may be formulated as an extra cost for minimization and considered during search. It means the approach is flexible not only for heterogeneous objectives but for dynamic objectives, and has great potential in applications of travel service.<br/><br/>
_**Key words:** A* algorithm, Multi-objective optimization, Trip planning, Hidden Markov model_

## Screenshots
<table>
 <tr>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/datetime.png" /></td>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/length.png" /></td>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/satification.png" /></td>
 </tr>
 <tr>
  <td align="center">Set date and time</td>
  <td align="center">Select number of POIs</td>
  <td align="center">Set satisfication for each trip factor</td>
 </tr>
</table>
<table>
 <tr>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/search.png" /></td>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/alter.png" /></td>
 </tr>
 <tr>
  <td align="center">Search</td>
  <td align="center">Adjust trip</td>
 </tr>
</table>
<table>
 <tr>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/recomd.png" /></td>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/area_recomd.png" /></td>
 </tr>
 <tr>
  <td align="center">Recommand nearby POIs</td>
  <td align="center">Recommand by area</td>
 </tr>
</table>
<table>
 <tr>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/restrict_search.png" /></td>
  <td><img src="https://github.com/ChienKangLu/Master-Thesis/blob/master/img/restrict_search_result.png" /></td>
 </tr>
 <tr>
  <td align="center">Restrict search</td>
  <td align="center">Restrict search result</td>
 </tr>
</table>
 
## System Demo 
<a href="https://www.youtube.com/watch?v=62v6cuF5I-0" target="_tab"><img src="http://img.youtube.com/vi/62v6cuF5I-0/0.jpg" 
alt="Mobile demo" width="240" height="180" border="10" /></a>
## Reference
[Backward Heuristic and Satisfaction-based Multiobjectives Optimization for A* Search on Trip Planning (Full-Text)](http://etheses.lib.ntust.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=B1WIII/record?r1=1&h1=2)



document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('interests-graph');

  if (container) {
    var nodes = new vis.DataSet([
      {id: 1, label: 'Programming'},
      {id: 2, label: 'Machine Learning'},
      {id: 3, label: 'Data Visualization'},
      {id: 4, label: 'Web Development'},
      {id: 5, label: 'Research'}
    ]);

    var edges = new vis.DataSet([
      {from: 1, to: 2},
      {from: 1, to: 4},
      {from: 2, to: 3},
      {from: 2, to: 5},
      {from: 4, to: 3}
    ]);

    var data = {
      nodes: nodes,
      edges: edges
    };

    var options = {
      nodes: {
        shape: 'dot',
        size: 20,
        font: {
          size: 14,
          color: '#555'
        },
        borderWidth: 2,
        color: {
          border: '#2b6cb0',
          background: '#ffffff'
        }
      },
      edges: {
        width: 1,
        color: {
          color: '#888'
        }
      },
      physics: {
        enabled: true,
        solver: 'repulsion'
      }
    };

    var network = new vis.Network(container, data, options);
  }
}); 
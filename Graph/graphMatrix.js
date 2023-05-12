class Graph{
    constructor(){
        this.numVertices = 0
        this.adjMatrix = []
        this.vertexvalues = []
    }

    addVertex(values){
        this.vertexvalues.push(values)
        this.numVertices++  
        for(let i=0 ; i < this.adjMatrix.length ; i++ ){
            this.adjMatrix[i].push(0)
        }
        this.adjMatrix.push(new Array(this.numVertices).fill(0))
    }

    addEdge(v1,v2){
        let i = this.vertexvalues.indexOf(v1)
        let j = this.vertexvalues.indexOf(v2)
        this.adjMatrix[i][j] = 1
        this.adjMatrix[j][i] = 1
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("b")
graph.addVertex("c")
graph.addVertex("d")

console.log(graph)
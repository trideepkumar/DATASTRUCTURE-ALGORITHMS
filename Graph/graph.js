//ADDIING A VERTEX IN THE GRAPH

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    //adding a vertex to the adjacency list 

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    // adding a vertex to the adjacency matrix

    addEdge(v1,v2){
        if(!this.adjacencyList[v1]) this.adjacencyList[v1] = []
        if(!this.adjacencyList[v2]) this.adjacencyList[v2] = []
        if(!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2)
        if(!this.adjacencyList[v2].includes(v1))  this.adjacencyList[v2].push(v1)

    }

    //removing an edge from the adjacencylist

    removeEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false
         this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2)
         this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v =! v1)
         return true
    }

    //removing a vertex from the adjacency list

    removeVertex(vertex){
           while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacencyVertex)
           }
           delete this.adjacencyList[vertex]
    }

    //Breadth first search

    BFS(vertex){
        const queue = [vertex]
        const visited = {}
        const result = []
        
        visited[vertex] = true

        while(queue.length){
            const currentVertex = queue.shift()
            result.push(currentVertex)

            for(let item of this.adjacencyList[currentVertex]){
            if(!visited[item]){
                visited[item] = true
                queue.push(item)
            }
            }
        }
     return result
    }

    //DEAPTH FIRST SEARCH USING RECURSION

    DFSRec(start,visited={},result=[]){
        result.push(start)
        visited[start] = true
        for(let item of this.adjacencyList[start]){
            if(!visited[item]){
                visited[item] = true
                this.DFSRec(item,visited,result)
            }
        }
        return result
    }

    //DEAPTH FIRST USING ITERATION

    DFS(vertex){
        let stack = [vertex]
        let visited = {}
        let result = []
        visited[vertex] = true
        while(stack.length){
            const currentVertex = stack.pop()
            result.push(currentVertex)
          for(let item of this.adjacencyList[currentVertex]){
            if(!visited[item]){
                visited[item] =true
                stack.push(item)
            }
          }  
        }
        return result
    }

    //ALL POSSIBLE PATHS

    allValidPaths(start,end){
        let visited = {}
        let result = []
        let adjacencyList = this.adjacencyList
        let arr
        function DFSearch(start,arr=[]){
            arr.push(start)
            visited[start] = true
            if(start === end){
                result.push(arr)
            }
        }
        for(let item of adjacencyList[start]){
            if(!visited[item]){
                visited[item] = true
                DFSearch(item,arr)
            }
        }
        visited[start] = false
        return result
    }

}

const graph = new Graph()

graph.addVertex("bob")
graph.addVertex("marley")
graph.addVertex("steve")
graph.addVertex("jobs")
graph.addVertex("ali")
graph.addVertex("baba")
graph.addEdge("bob","baba")
graph.addEdge("steve","jobs")
graph.addEdge("jobs","ali")
graph.addEdge("ali" , "baba")
graph.addEdge("marley","ali")


// graph.removeVertex("bob")

// graph.removeEdge("bob" ,"marley")

// console.log(graph)

// console.log(graph.BFS("bob"))

console.log(graph.allValidPaths('bob','ali'))
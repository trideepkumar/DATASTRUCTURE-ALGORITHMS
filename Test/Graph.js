class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    // addVertex(vertex){
    //    if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = []
    // }

    // addVertex(v1,v2){
        
    // }

    Bfs(vertex){  

        let  queue = [vertex]
        let  visited  = {}
        let result = []

        visited[vertex]  =  true

        while(queue.length){

            let currentVertex = queue.shift()
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

    Dfs(start,visited={},result=[]){
         result.push(start)
         visited[start] = true
         for(let item of this.adjacencyList[start]){
            if(!visited[item]){
                visited[item] = true
                this.Dfs(item,visited,result)
            }
         }
         return result
    }
}

const myGraph = new Graph();


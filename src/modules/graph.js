class Graph {
	constructor() {
        this.vertices = new Set()
        this.edge = {
            count: 0
        }
    }
    
    addVertex(vertex) {
        if(vertex != null) 
            this.vertices.add(vertex)
        else
            throw 'Vertex cannot be null'
    }

    removeVertex(vertex) {
        if(vertex != null) 
            this.vertices.delete(vertex)
    }

    addEdge(origin, arr) {
        if(!this.edge[origin.id]) 
            this.edge[origin.id] = new Set()

        arr.forEach(vertex => {
            this.edge[origin.id].add(vertex.id)

            if(!this.edge[vertex.id]) 
                this.edge[vertex.id] = new Set()

            this.edge[vertex.id].add(origin.id)
        });
    }
    
    removeEdge(origin, vertex) {
        let edge = this.edge[origin.id]
        if(edge)
            edge.delete(vertex.id) 
        
        edge = this.edge[vertex.id]
        if(edge)
            edge.delete(origin.id) 
    }

    astar(start, end) {
        let traversed = new Set()
        
        let discovered = new Set()
        discovered.add(start)

        let cameFrom = {}
        let costToNode = {}
        vertices.forEach(vertex => {
            costToNode[vertex.id] = Number.POSITIVE_INFINITY
        })
        costToNode[start.id] = 0

        let hCost = {}
        vertices.forEach(vertex => {
            hCost[vertex.id] = Number.POSITIVE_INFINITY
        })
        costToNode[start.id] = heuristicCost(start, end)
    }

    heuristicCost(vertex, end) {
        let x = Math.abs(vertex.x - end.x)
        let y = Math.abs(vertex.y - end.y)
        return Math.sqrt(x*x +y*y);
    }
}
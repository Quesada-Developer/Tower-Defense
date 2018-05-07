class Graph {
	constructor() {
        this.vertices = new Set()
        this.edge = {
            count: 0
        }
    }
    
    addVertex(vertex) {
        if(vertex != null || !this.vertices.has(vertex)) 
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
        let closedSet = new Set()
        
        let openSet = new Set()
        openSet.add(start)

        let cameFrom = {}
        let gScore = {}
        vertices.forEach(vertex => {
            gScore[vertex.id] = Number.POSITIVE_INFINITY
        })
        gScore[start.id] = 0

        let fScore = {}
        vertices.forEach(vertex => {
            fScore[vertex.id] = Number.POSITIVE_INFINITY
        })
        fScore[start.id] = heuristicCost(start, end)

        while(openSet.size != 0) {
            let current, cost = Number.POSITIVE_INFINITY
            openSet.forEach(vertex => {
                if(fScore[vertex.id] < cost) {
                    current = vertex
                    cost = fScore[vertex.id]
                }
            })

            if(current === end)
                return reconstructPath(cameFrom, current)
            openSet.remove(current)
            closeSet.add(current)

            this.edge[current].id.forEach(neighbor => {
                if(!closedSet.has(neighbor)) {
                    if(!openSet.has(neigbor))
                        openSet.add(neighbor)
                    
                    let gs = gScore[current.id] + 1
                    if(gs < gScore[neighbor.id]) {
                        cameFrom[neighbor] = current
                        gScore[neighbor.id] = gs
                        fScore[neighbor.id] = gs + heuristicCost(neighbor, end)
                    }

                }
            })

            return false
            
        }
    }

    heuristicCost(vertex, end) {
        let x = Math.abs(vertex.x - end.x)
        let y = Math.abs(vertex.y - end.y)
        return Math.sqrt(x*x +y*y);
    }
}
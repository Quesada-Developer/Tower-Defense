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
        if(!this.edge[origin]) 
            this.edge[origin] = new Set()

        arr.forEach(vertex => {
            this.edge[origin].add(vertex)

            if(!this.edge[vertex]) 
                this.edge[vertex] = new Set()

            this.edge[vertex].add(origin)
        });
    }
}
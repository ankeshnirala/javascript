// 1) create linked list constructor(head, tail)
    function LinkedList() {
        //initially our linked list is empty
        this.head = null;
        this.tail = null;
    }

// 2) create node constructor(value, next, prev)
    function Node(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

// 3) add node at head
    LinkedList.prototype.addToHead = function(value) {
        // 1) create new node
            let newNode = new Node(value, this.head, null);
        // 2) check linked list empty or not
            //if linked list is not empty
            if(this.head) this.head.prev = newNode;

            //if linked list is empty
            else this.tail = newNode;

            //our head is always at new node when we add new node head
            this.head = newNode;

            return `new node added with ${value} data at head!!`;
    };

// 4) add node at tail
    LinkedList.prototype.addToTail = function (value) {
        let newNode = new Node(value, null, this.tail);

        if(this.tail) this.tail.next = newNode;
        else this.head = newNode;
        this.tail = newNode;

        return `new node added with ${value} data at tail!!`;
    };

// 5) delete node at head
    LinkedList.prototype.removeHead = function() {
        //if linked list is empty
        if(!this.head) return null;

        //store deleted node value
        let value = this.head.value;

        //remove node
        this.head = this.head.next;

        //if there is node then set prev as null
        if(this.head) this.head.prev = null;

        // if there is no node
        else this.tail.next = null;

        return `node deleted with ${value}`;
    };


// 6) delete node at tail
    LinkedList.prototype.removeTail = function() {
        if(!this.tail) return null;
        
        let value = this.tail.value;

        this.tail = this.tail.prev;

        if(this.tail) this.tail.next = null;
        else this.head.prev = null;

        return `node deleted with ${value}`;
    };

// 7) search data in linked list
    LinkedList.prototype.search = function(searchValue) {
        let currentNode = this.head;

        while(currentNode) {
            if(currentNode.value === searchValue) return currentNode.value;
            currentNode = currentNode.next;
        }
        return -1;
    };

    //TESTING OUR CODE

    let newLinkedList = new LinkedList();

    newLinkedList.addToHead(100);
    newLinkedList.addToHead(200);
    newLinkedList.addToHead(300);

    newLinkedList.addToTail(400);
    newLinkedList.addToTail(500);
    newLinkedList.addToTail(600);

    // console.log(newLinkedList.removeHead());
    // console.log(newLinkedList.removeTail());

    console.log(newLinkedList.search(600));
    
    console.log(newLinkedList);
    
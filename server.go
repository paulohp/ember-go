package main

import "net/http"
import "log"

func main() {
	log.Println("Starting server")
	http.Handle("/", http.FileServer(http.Dir("./public/")))

	log.Println("Listening on 8080")
	http.ListenAndServe(":8080", nil)
}

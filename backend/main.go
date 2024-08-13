package main

import (
	"github.com/HarshitNagpal29/karmada-sample-project/database"
	"github.com/HarshitNagpal29/karmada-sample-project/handler"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	database.InitDB()
	r.GET("/metrics", handler.GetMetrics)
	r.Run()
}

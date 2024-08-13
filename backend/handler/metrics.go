package handler

import (
	"net/http"

	"github.com/HarshitNagpal29/karmada-sample-project/database"
	"github.com/HarshitNagpal29/karmada-sample-project/model"
	"github.com/gin-gonic/gin"
)

func GetMetrics(c *gin.Context) {
	var metrics []model.Metric
	database.DB.Find(&metrics)
	c.JSON(http.StatusOK, metrics)
}

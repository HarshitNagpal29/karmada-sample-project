package model

type Metric struct {
	ID        uint   `json:"id" gorm:"primary_key"`
	Name      string `json:"name"`
	Value     string `json:"value"`
	Timestamp string `json:"timestamp"`
}

package main

import (
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"backend/models"
	"fmt"

	"os"

	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("DB_PORT")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", host, user, password, dbname, port)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Gagal menyambung ke database: %v", err)
	}

	// create/update table structure
	db.AutoMigrate(&models.Event{})

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type", "Accept"},
	}))

	// test endpoint
	r.GET("/api/items", func(c *gin.Context) {
		var events []models.Event

		result := db.Find(&events)

		if result.Error != nil {
			c.JSON(500, gin.H{
				"error": result.Error.Error(),
			})
			return
		}

		c.JSON(200, events)
	})

	r.Run(":8080")
}

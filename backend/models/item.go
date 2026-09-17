package models

import "time"

type Event struct {
	ID              uint      `gorm:"primaryKey" json:"id"`
	Image           string    `json:"image"`
	Nama            string    `json:"nama"`
	DateStart       time.Time `json:"date_start"`
	DateEnd         time.Time `json:"date_end"`
	LinkInstagram   string    `gorm:"column:link_ig" json:"link_ig"`
	LinkGuideBook   string    `gorm:"column:link_guidebook" json:"link_guidebook"`
	LinkPendaftaran string    `gorm:"column:link_pendaftaran" json:"link_pendaftaran"`
}

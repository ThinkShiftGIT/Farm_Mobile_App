package com.example.farmmobileapp.data

import java.util.Date

data class Animal(
    val id: String,
    val name: String,
    val type: String,
    val breed: String? = null,
    val dateOfBirth: Date? = null,
    val weight: Double? = null,
    val status: AnimalStatus = AnimalStatus.HEALTHY,
    val notes: String? = null
)

enum class AnimalStatus {
    HEALTHY, SICK, TREATMENT
}

data class HealthRecord(
    val id: String,
    val animalId: String,
    val date: Date,
    val type: HealthRecordType,
    val description: String,
    val veterinarian: String? = null,
    val medications: List<String> = emptyList(),
    val nextCheckupDate: Date? = null
)

enum class HealthRecordType {
    VACCINATION, TREATMENT, CHECKUP
}

data class Production(
    val id: String,
    val date: Date,
    val type: ProductionType,
    val quantity: Double,
    val unit: String,
    val notes: String? = null
)

enum class ProductionType {
    MILK, EGGS, CROPS, OTHER
}

data class InventoryItem(
    val id: String,
    val name: String,
    val category: InventoryCategory,
    val quantity: Double,
    val unit: String,
    val minimumThreshold: Double? = null,
    val lastRestocked: Date? = null,
    val notes: String? = null
)

enum class InventoryCategory {
    FEED, MEDICINE, EQUIPMENT, OTHER
}

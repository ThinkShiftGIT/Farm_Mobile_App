package com.example.farmmobileapp.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.farmmobileapp.data.Animal
import com.example.farmmobileapp.data.AnimalStatus

@Composable
fun AnimalsScreen(navController: NavController) {
    var animals by remember { mutableStateOf<List<Animal>>(emptyList()) }
    var isLoading by remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        // TODO: Load animals from database/API
        isLoading = false
    }

    Scaffold(
        topBar = {
            SmallTopAppBar(
                title = { Text("Animals") },
                navigationIcon = {
                    IconButton(onClick = { navController.navigateUp() }) {
                        Icon(Icons.Default.Add, contentDescription = "Back")
                    }
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(onClick = { /* TODO: Add new animal */ }) {
                Icon(Icons.Default.Add, contentDescription = "Add Animal")
            }
        }
    ) { padding ->
        if (isLoading) {
            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
        } else {
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding)
            ) {
                items(animals) { animal ->
                    AnimalCard(animal = animal)
                }
            }
        }
    }
}

@Composable
fun AnimalCard(animal: Animal) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp)
    ) {
        Column(
            modifier = Modifier
                .padding(16.dp)
        ) {
            Text(
                text = animal.name,
                style = MaterialTheme.typography.titleMedium
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Type: ${animal.type}",
                style = MaterialTheme.typography.bodyMedium
            )
            animal.breed?.let {
                Text(
                    text = "Breed: $it",
                    style = MaterialTheme.typography.bodyMedium
                )
            }
            Text(
                text = "Status: ${animal.status}",
                style = MaterialTheme.typography.bodyMedium,
                color = when (animal.status) {
                    AnimalStatus.HEALTHY -> MaterialTheme.colorScheme.primary
                    AnimalStatus.SICK -> MaterialTheme.colorScheme.error
                    AnimalStatus.TREATMENT -> MaterialTheme.colorScheme.tertiary
                }
            )
        }
    }
}

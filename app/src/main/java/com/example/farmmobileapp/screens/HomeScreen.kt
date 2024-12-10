package com.example.farmmobileapp.screens

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController

@Composable
fun HomeScreen(navController: NavController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "Farm Management",
            style = MaterialTheme.typography.headlineMedium,
            modifier = Modifier.padding(bottom = 32.dp)
        )

        MenuButton(
            text = "Animals",
            onClick = { navController.navigate("animals") }
        )
        MenuButton(
            text = "Health Records",
            onClick = { navController.navigate("health") }
        )
        MenuButton(
            text = "Production",
            onClick = { navController.navigate("production") }
        )
        MenuButton(
            text = "Inventory",
            onClick = { navController.navigate("inventory") }
        )
    }
}

@Composable
private fun MenuButton(
    text: String,
    onClick: () -> Unit
) {
    Button(
        onClick = onClick,
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp)
    ) {
        Text(text = text)
    }
}

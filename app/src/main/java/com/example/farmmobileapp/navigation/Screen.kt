sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Inventory : Screen("inventory")
    object Tasks : Screen("tasks")
    object Weather : Screen("weather")
    object Reports : Screen("reports")
}

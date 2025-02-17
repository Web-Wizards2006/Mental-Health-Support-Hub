@RestController
@RequestMapping("/api/chatbot")
public class ChatbotService {
    @GetMapping
    public String getResponse(@RequestParam String message) {
        if (message.toLowerCase().contains("sad")) {
            return "I'm here for you. Remember, you're not alone. Try taking deep breaths.";
        }
        return "Tell me more about how you're feeling.";
    }
}


import random

def hot_cold_game():
    # Generate a random number between 1 and 100
    number_to_guess = random.randint(1, 100)
    guess_count = 0
    previous_difference = None

    print("🌡️ Welcome to the Hot and Cold Guessing Game! 🌡️")
    print("I'm thinking of a number between 1 and 100.")
    print("Guess the number, and I'll tell you if you're getting hotter or colder.\n")

    while True:
        try:
            # Take a guess from the user
            guess = int(input("Enter your guess: "))
            guess_count += 1

            # Calculate how far the guess is from the target number
            difference = abs(number_to_guess - guess)

            if guess == number_to_guess:
                print(f"🎉 Congratulations! You guessed the number in {guess_count} tries!")
                break
            else:
                # Provide feedback on proximity
                if previous_difference is None:
                    # First guess, no previous distance to compare
                    if difference <= 10:
                        print("Warm! You're getting close!")
                    else:
                        print("Cold! Try again.")
                else:
                    # Compare with previous guess to see if getting closer
                    if difference < previous_difference:
                        print("Hotter! You're getting closer!")
                    else:
                        print("Colder! You're moving away!")

                # Update previous difference for next comparison
                previous_difference = difference

        except ValueError:
            print("Please enter a valid integer.")

# Run the game
hot_cold_game()

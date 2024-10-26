Exercise 3: 

Given the following form:

<label for="tentacles">Number of tentacles (10-100):</label>
<input type="number" id="tentacles" name="tentacles"
min="10" max="100">
<button>Send</button>

Write all necessary test cases to make sure the input field is working as expected; valid
values will lead to a "Success" message, and invalid to an "Error" message.

------------------------------------------------------------------------------------------------------------------------------------------

To test the input field for the "Number of tentacles" form, we can create a set of test cases that cover both valid and invalid scenarios, 
ensuring that the form behaves correctly based on the specified range (10-100). 

The following test cases aim to check the behavior of the form with boundary values, edge cases, and incorrect input types.

Test Cases

1. Valid Boundary Test: Minimum Value

Test Case: Enter the minimum valid value (10) into the input field.

Input: 10

Expected Result: The form should display the message "Success."

2. Valid Boundary Test: Maximum Value

Test Case: Enter the maximum valid value (100) into the input field.

Input: 100

Expected Result: The form should display the message "Success."

3. Valid Value Within Range

Test Case: Enter a valid value between the min and max (e.g., 50).

Input: 50

Expected Result: The form should display the message "Success."

4. Invalid Value: Below Minimum

Test Case: Enter a value below the minimum allowed (e.g., 9).

Input: 9

Expected Result: The form should display the message "Error."

5. Invalid Value: Above Maximum

Test Case: Enter a value above the maximum allowed (e.g., 101).

Input: 101

Expected Result: The form should display the message "Error."

6. Invalid Input: Non-numeric Characters

Test Case: Enter non-numeric characters into the input field (e.g., "abc").

Input: "abc"

Expected Result: The form should display the message "Error."

7. Empty Input

Test Case: Submit the form without entering any value.

Input: No input (empty field)

Expected Result: The form should display the message "Error."

8. Negative Number Input

Test Case: Enter a negative number into the input field (e.g., -15).

Input: -15

Expected Result: The form should display the message "Error."

9. Input with Decimal Value (it's impossible to have a non-integer number of tentacles)

Test Case: Enter a decimal number into the input field (e.g., 25.5).

Input: 25.5

Expected Result: The form should display the message "Error."

10. Input with Leading Zeros

Test Case: Enter a valid number with leading zeros (e.g., 010).

Input: 010

Expected Result: The form should display the message "Success."

11. Boundary Test: Just Above Minimum

Test Case: Enter a value just above the minimum (e.g., 11).

Input: 11

Expected Result: The form should display the message "Success."

12. Boundary Test: Just Below Maximum

Test Case: Enter a value just below the maximum (e.g., 99).

Input: 99

Expected Result: The form should display the message "Success."

13. Boundary Test: Value One Below Minimum (because we know that sometimes even the simplest edge cases yield issues, best to test them!)

Test Case: Enter a value that is one less than the minimum (e.g., 9).

Input: 9

Expected Result: The form should display the message "Error."

14. Boundary Test: Value One Above Maximum

Test Case: Enter a value that is one more than the maximum (e.g., 101).

Input: 101

Expected Result: The form should display the message "Error."

15. Input with Special Characters

Test Case: Enter special characters (e.g., @#$) into the input field.

Input: @#$

Expected Result: The form should display the message "Error."

Additional Considerations:

UI Feedback: Verify that the "Success" and "Error" messages are displayed clearly to the user.

Keyboard Inputs: Test if the input field properly restricts non-numeric input using the keyboard.

Focus and Blur Behavior: Test how the form behaves when focusing and then unfocusing the input field (e.g., using tab or clicking elsewhere).

These test cases cover all essential scenarios to ensure that the input field accepts only values within the specified range (10-100) 
and rejects anything outside of this range, including non-numeric values.


-----------------------------------------------using gherkin--------------------------------------------------------------------

Feature: Validate the Number of Tentacles Input Field
  As a user filling out the form
  I want to ensure that the input field only accepts valid numbers between 10 and 100
  So that I receive a "Success" message for valid values and an "Error" message for invalid values

  Background:
    Given I am on the form page

  Scenario Outline: Submitting a value in the "Number of tentacles" field
    When I enter "<input_value>" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see a "<message>" message

    Examples:
      | input_value | message  |
      | 10          | Success  |
      | 100         | Success  |
      | 50          | Success  |
      | 9           | Error    |
      | 101         | Error    |
      | abc         | Error    |
      | -15         | Error    |
      | 25.5        | Error    |
      | 010         | Success  |
      | 11          | Success  |
      | 99          | Success  |
      | @#$         | Error    |
      | ""          | Error    |

Let me now write some of these scenarios. The importance of them would rely on data. 

  Scenario: Entering a number below the minimum boundary (9)
    When I enter "9" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see an "Error" message

  Scenario: Entering a number above the maximum boundary (101)
    When I enter "101" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see an "Error" message

  Scenario: Submitting a valid number with leading zeros
    When I enter "010" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see a "Success" message

  Scenario: Entering an empty value
    When I leave the "Number of tentacles" field empty
    And I click the "Send" button
    Then I should see an "Error" message

  Scenario: Submitting non-numeric characters
    When I enter "abc" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see an "Error" message

  Scenario: Submitting decimal values
    When I enter "25.5" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see an "Error" message

  Scenario: Submitting special characters
    When I enter "@#$" in the "Number of tentacles" field
    And I click the "Send" button
    Then I should see an "Error" message


Explanation: 

Explanation of the Gherkin Scenarios
Scenario Outline: This scenario outline handles multiple test cases by reusing the same steps for various inputs. 
Each row in the Examples table provides a different input value and its corresponding expected message (Success or Error).

Boundary and Edge Cases: Scenarios for specific boundary values (like entering 9 or 101), entering leading zeros, 
and invalid inputs such as special characters or non-numeric values.


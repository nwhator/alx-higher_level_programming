#include <stddef.h>
#include "lists.h"

/**
 * is_palindrome - checks if a singly linked list is a palindrome
 * @head: double pointer to the head of the list
 * Return: 0 if not a palindrome, 1 if a palindrome
 */

int is_palindrome(listint_t **head)
{
	listint_t *fast = *head;
	listint_t *slow = *head;
	listint_t *prev = NULL;
	listint_t *temp;

	/* Check for an empty list or a list with a single node */
	if (*head == NULL || (*head)->next == NULL)
	{
		return (1);
	}
	/* Split the list into two halves and reverse the first half */
	while (fast != NULL && fast->next != NULL)
	{
		fast = fast->next->next;  /* Move fast pointer two steps */
		temp = slow->next;
		slow->next = prev; /* Reverse the link of the slow pointer */
		prev = slow;
		slow = temp;
	}
	/* Adjust the slow pointer if the list has an odd number of nodes */
	if (fast != NULL)
		slow = slow->next;
	/* Compare the reversed first half with the second half */
	while (slow != NULL)
	{
		if (prev->n != slow->n)
		{
			/* Nodes don't match, not a palindrome */
			return (0);
		}
		prev = prev->next;
		slow = slow->next;
	}
	/* All nodes match, it is a palindrome */
	return (1);
}

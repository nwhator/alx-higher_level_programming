#include "lists.h"

/**
 * check_cycle - Entry point
 * @list: head of linked list
 *
 * Description - Function to check if a linked list has a cycle
 * Return: 0 if there is no cycle, 1 if there is a cycle
 */

int check_cycle(listint_t *list)
{
	listint_t *head, *tail;

	if (!list || !list->next)
	{
		return (0);
	}
	head = list;
	tail = list->next;
	while (tail && tail->next)
	{
		if (head == tail)
		{
			return (1);
			/* Cycle found */
		}
		head = head->next;
		tail = tail->next->next;
	}
	return (0);
	/* No cycle found */
}

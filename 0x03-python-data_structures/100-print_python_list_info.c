#include <Python.h>
#include <object.h>
#include <listobject.h>

void print_python_list_info(PyObject *p)
{
	long int pySize = PyList_Size(p);
	int i;
	/*  Cast the object to PyListObject for access to additional fields */
	PyListObject *obj = (PyListObject *)p;
	
	/* Print the size of the list */
	printf("[*] Size of the Python List = %li\n", pySize);
	/* Print the allocated memory for the list */
	printf("[*] Allocated = %li\n", obj->allocated);
	/* Print the type of each element in the list */
	for (i = 0; i < pySize; i++)
	{
		printf("Element %i: %s\n", i, Py_TYPE(obj->ob_item[i])->tp_name);
	}
}

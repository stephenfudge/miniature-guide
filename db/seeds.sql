INSERT INTO department (name)
VALUES
    ('Executive'),
    ('Development'),
    ('Design'),
    ('Sales');


INSERT INTO role (title, salary, department_id)
VALUES
    ('CEO', 350000, 1),
    ('CTO', 300000, 1),

    ('Lead Developer',      200000, 2),
    ('Mid-Level Developer', 125000, 2),
    ('Junior Developer',     75000, 2),

    ('Lead Designer',    175000, 3),
    ('Junior Designer',  100000, 3),

    ('Sales', 180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Sue',  'Kingston',     1, NULL),
    ('Jim',  'Johnston',     2, NULL),
    ('Peter',  'Doe',        3, 2),
    ('Melissa',  'Spahr',    4, 3),
    ('Chris',  'Chaitram',   5, 3),
    ('Joan',  'Harvey',      6, 2),
    ('Monica',  'Johnson',   7, 6),
    ('Linda',  'Navarro',    8, NULL);

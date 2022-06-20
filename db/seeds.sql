INSERT INTO department (name)
VALUES
    ('Executive'),
    ('Development'),
    ('Design'),
    ('Sales');


INSERT INTO role (title, salary, department_id)
VALUES
    ('CEO', 1324134, 1),
    ('CTO', 2010201, 1),

    ('Lead Developer', 1324134, 2),
    ('Mid-Level Developer', 1000, 2),
    ('Junior Developer', 2010201, 2),

    ('Lead Designer', 1324134, 3),
    ('Junior Designer', 2010201, 3),

    ('Sales', 1324134, 4);
    -- ('', 2010201, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Sue',  'Kingston',     1, NULL),
    ('Jim',  'Johnston',     2, NULL),
    ('Peter',  'Doe',        3, NULL),
    ('Melissa',  'Spahr',    4, NULL),
    ('Chris',  'Chaitram',   5, 2),
    ('Joan',  'Harvey',      6, 4),
    ('Monica',  'Johnson',   7, 2),
    ('Linda',  'Navarro',    8, 3);
    -- ('Dave',  'Kiedis',      9, 2);

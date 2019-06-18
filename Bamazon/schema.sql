DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("grayhide backpack", "accessories", 37.99, 329);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("18-pack lip balm", "bath and body", 19.99, 1728);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("captain planet hoola hoop", "kids athletic", 23.99, 672);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wright Brothers model set", "hobby", 48.12, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1000 thread count pillow cases", "home", 89.99, 963);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boulder Bay wrist watch", "accessories", 187.99, 76);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dart camping stove", "outdoor and recreation", 63.99, 409);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Benson knife set", "kitchen", 229.99, 763);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cool Beans coffee 3-lbs", "grocery", 17.99, 493);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Bubblie seltzer 24-pk", "grocery", 7.99, 943);

SELECT * FROM products;

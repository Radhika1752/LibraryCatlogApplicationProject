package com.rest.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rest.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}

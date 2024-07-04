package com.rest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest.Repo.BookRepository;
import com.rest.entity.Book;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bRepo;
	
	public Book newBook (Book b)
	{
		return bRepo.save(b);
	}
	
	public List<Book> getAllCustomer()
	{
		return bRepo.findAll();
	}
	
	public Optional<Book> getSingleBook(Long id)
	{
		return bRepo.findById(id);
	}
	
	public void dltBook(Long id)
	{
		bRepo.deleteById(id);
	}
	
	public Book getSingleBook1(Long id)
	{
		return bRepo.findById(id).orElse(null);
	}
	
	public Book UpdateSingleBook1(Long id, Book z)
	{
		Optional<Book> s=bRepo.findById(id);
		if(s.isPresent())
		{
			Book b1=s.get();
			b1.setTitle(z.getTitle());
			b1.setAuthor(z.getAuthor());
			b1.setIsbn(z.getIsbn());
		//	b1.setAvailable(z.isAvailable());
			return bRepo.save(b1);
		}
		return null;
	}
	

}

/*
 * import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Other dependencies as needed

    @Transactional
    public boolean checkoutBook(Long bookId) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            if (book.isAvailable()) {
                book.setAvailable(false);
                bookRepository.save(book);
                // Perform additional operations like updating borrowing history
                return true; // Successfully checked out
            } else {
                return false; // Book is already checked out
            }
        } else {
            throw new RuntimeException("Book not found with id: " + bookId);
        }
    }

    @Transactional
    public boolean returnBook(Long bookId) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            if (!book.isAvailable()) {
                book.setAvailable(true);
                bookRepository.save(book);
                // Perform additional operations like updating borrowing history
                return true; // Successfully returned
            } else {
                return false; // Book is already available
            }
        } else {
            throw new RuntimeException("Book not found with id: " + bookId);
        }
    }

    // Other methods for CRUD operations, search, etc.
}

 * 
 * */
 

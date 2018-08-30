package online.nwen.repository;

import online.nwen.domain.Anthology;
import online.nwen.domain.AuthorAnthologyBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAuthorAnthologyBookmarkRepository extends JpaRepository<AuthorAnthologyBookmark, AuthorAnthologyBookmark.PK> {
    long countByPkAnthology(Anthology anthology);
}
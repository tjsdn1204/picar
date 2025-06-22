package net.likelion.picar.repository;

import net.likelion.picar.domain.Dealer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DealerRepository extends JpaRepository<Dealer, Long> {
}
